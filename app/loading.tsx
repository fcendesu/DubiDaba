import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";

const Loading = () => {
  const router = useRouter();
  const { name, birthDay, moonPhase } = useLocalSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace({
        pathname: "/share",
        params: { name, birthDay, moonPhase },
      });
    }, 3000); // Simulate 3 seconds of loading

    return () => clearTimeout(timeout);
  }, [router, name, birthDay, moonPhase]);

  return (
    <SafeAreaView className="flex-1 bg-black h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          <View className="h-[93%] items-center justify-center">
            <View>
              <LottieView
                source={require("../assets/animations/Animation - 1730325384506.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
              />
            </View>

            <Text className="text-white mb-10 font-semibold">
              Yükleniyor...
            </Text>
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

export default Loading;
