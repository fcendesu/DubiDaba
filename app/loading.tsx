import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';



const Loading = () => {
  return (
    

    <SafeAreaView className="flex-1 bg-black h-full">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center">
          <View className="h-[93%] items-center justify-center" >
            
            <View>
            <LottieView
              source={require('../assets/animations/Animation - 1730325384506.json')}
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



  )
}

export default Loading