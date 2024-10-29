import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (

    <SafeAreaView className="flex-1 bg-black h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
            <View className="h-[93%] items-center justify-center" >
              
              <TouchableOpacity 
              onPress={() => router.push('/form-fill')} 
              className="bg-primary w-[168px] h-[168px] rounded-full justify-center items-center">
                <Text className="text-black font-bold text-3xl">
                  BAŞLA
                </Text>
              </TouchableOpacity>

              <Text className="text-white text-center mt-5">
                Doğudunuz gün Ay'ın konumunu görmek{"\n"} için devam edin.{" "}
              </Text>
            </View>


            <View className=" h-[7%] ">
              <View className="h-[1px] bg-white w-[85%] mx-auto"/>

              <View className="justify-center items-center mt-3">
                <Text className=" text-gray-100 text-center">
                  DabaDubi
                </Text>
              </View>
            </View>

          </View> 
        
      </ScrollView>
    </SafeAreaView>

  
  );
}
