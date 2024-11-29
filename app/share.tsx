import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { X } from "lucide-react-native";
import { useLocalSearchParams } from "expo-router";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

const Share = () => {
  const { name, birthDay, moonPhase } = useLocalSearchParams();
  const moonPhaseStr = Array.isArray(moonPhase) ? moonPhase[0] : moonPhase;
  const MoonPhase = (moonPhase: string) => {
    if (moonPhase === "New Moon")
      return require("../assets/images/new-moon.webp");
    if (moonPhase === "Waxing Crescent")
      return require("../assets/images/waxing-crescent.webp");
    if (moonPhase === "First Quarter")
      return require("../assets/images/first-quarter.webp");
    if (moonPhase === "Waxing Gibbous")
      return require("../assets/images/waxing-gibbous.webp");
    if (moonPhase === "Full Moon") return require("../assets/images/full.webp");
    if (moonPhase === "Waning Gibbous")
      return require("../assets/images/waning-gibbous.webp");
    if (moonPhase === "Third Quarter")
      return require("../assets/images/third-quarter.webp");
    if (moonPhase === "Waning Crescent")
      return require("../assets/images/waning-crescent.webp");

    return require("../assets/images/first-quarter.webp");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Ref to capture the view
  const viewRef = useRef(null);

  const handleShare = async () => {
    try {
      // Capture the view as an image
      // Add a small delay to ensure the UI is fully rendered
      console.log("ui");

      console.log("uri1");
      const uri = await captureRef(viewRef);
      console.log("uri");
      // Check if sharing is available
      if (!(await Sharing.isAvailableAsync())) {
        Alert.alert("Error", "Sharing is not available on this device.");
        return;
      }

      // Share the image
      await Sharing.shareAsync(uri, {
        mimeType: "image/png",
        dialogTitle: "Share your Moon Phase",
        UTI: "public.png",
      });
    } catch (error) {
      console.error("Error sharing the image:", error);
      Alert.alert("Error", "Failed to share the image.");
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
              className="items-center justify-center mt-12"
              ref={viewRef}
              collapsable={false}
            >
              <Image
                source={MoonPhase(moonPhaseStr || "First Quarter")}
                className="w-[357px] h-[342px] "
                resizeMode="contain"
              />

              <Text className="text-white mt-3 font-semibold text-lg">
                {name}
              </Text>
              {!isEnabled && (
                <Text className="text-white mt-3 font-semibold text-3xl">
                  {birthDay}
                </Text>
              )}
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
