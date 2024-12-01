import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  Platform,
  Linking,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { X } from "lucide-react-native";
import { useLocalSearchParams } from "expo-router";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

import MoonPhaseDisplay from "../components/MoonPhaseDisplay";

import type { SkImage } from "@shopify/react-native-skia";
import { makeImageFromView } from "@shopify/react-native-skia";
import { ImageFormat } from "@shopify/react-native-skia";
import * as MediaLibrary from "expo-media-library";

const Share = () => {
  const { name, birthDay, moonPhase } = useLocalSearchParams();
  const moonPhaseStr = Array.isArray(moonPhase) ? moonPhase[0] : moonPhase;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Create a ref for the view you'd like to take a snapshot of
  const ref = useRef<View>(null);
  // Create a state variable to store the snapshot

  const [image, setImage] = useState<SkImage | null>(null);

  const handleShare = async () => {
    try {
      // Request media library permissions
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Needed",
          "Please grant media library access to share."
        );
        return;
      }

      // Capture the view as an image
      const capturedImage = await makeImageFromView(ref);
      if (!capturedImage) {
        Alert.alert("Error", "Failed to capture the view.");
        return;
      }

      // Convert image to PNG
      const pngImage = capturedImage.encodeToBase64(ImageFormat.PNG);

      // Create a file path
      const fileName = `MoonPhase_${new Date().getTime()}.png`;
      const fileUri = `${FileSystem.documentDirectory}${fileName}`;

      // Write the image to file
      await FileSystem.writeAsStringAsync(fileUri, pngImage, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Save to media library
      const asset = await MediaLibrary.createAssetAsync(fileUri);

      // Share to Instagram
      if (Platform.OS === "ios") {
        // iOS method
        const instagramUrl = `instagram://library?AssetPath=${asset.uri}`;
        Linking.canOpenURL(instagramUrl).then((supported) => {
          if (supported) {
            Linking.openURL(instagramUrl);
          } else {
            Alert.alert("Error", "Instagram app is not installed.");
          }
        });
      } else if (Platform.OS === "android") {
        // Android method
        const instagramPackage = "com.instagram.android";
        await Sharing.shareAsync(asset.uri, {
          mimeType: "image/png",
          dialogTitle: "Share to Instagram",
          UTI: "com.instagram.photo",
          packages: [instagramPackage],
        });
      }
    } catch (error) {
      console.error("Error sharing the image:", error);
      Alert.alert("Error", "Failed to share the image to Instagram.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          <View className="h-[93%] items-center justify-between flex-col">
            <View className="flex-row justify-end w-full">
              <TouchableOpacity className=" p-1 mt-2 mr-5">
                <X color="white" size={30} />
              </TouchableOpacity>
            </View>

            <View
              className="flex-1"
              ref={ref}
              // collapsable={false} is important here
              collapsable={false}
            >
              <MoonPhaseDisplay
                moonPhaseStr={moonPhaseStr}
                name={Array.isArray(name) ? name[0] : name}
                birthDay={Array.isArray(birthDay) ? birthDay[0] : birthDay}
                isEnabled={isEnabled}
              />
            </View>
            <View className="my-10">
              <View className="flex-row items-center justify-center my-5">
                <Text className="text-white ">Tarihi gizle</Text>
                <Switch
                  trackColor={{ false: "#FFFF", true: "#65558F" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <TouchableOpacity
                className="bg-purple rounded-full w-[138px] h-[35px] justify-center items-center"
                onPress={handleShare}
              >
                <Text className=" text-white text-center text-3xl font-semibold">
                  Paylaş
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className=" h-[7%] ">
            <View className="h-[1px] bg-white w-[85%] mx-auto" />

            <View className="justify-center items-center mt-3">
              <Text className=" text-gray-100 text-center">DabaDubi</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Share;
