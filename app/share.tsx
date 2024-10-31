import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { X } from "lucide-react-native";

const Share = () => {
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
            <View className="items-center justify-center mt-[-2]">
              <Image
                source={require("../assets/images/first-quarter.webp")}
                className="w-[357px] h-[342px] "
                resizeMode="contain"
              />

              <Text className="text-white mt-3 font-semibold text-lg">
                Yiğit Erden
              </Text>
              <Text className="text-white mt-3 font-semibold text-3xl">
                21/08/1999
              </Text>
            </View>
            <View></View>
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
