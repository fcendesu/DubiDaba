import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FormFill = () => {

    const [form, setForm] = useState({
        name: "",
        surname: "",
        date: Date,
        });

  return (
    
    
    
    <SafeAreaView className="flex-1 bg-black h-full">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1">
          <View className="h-[93%] items-center justify-center" >
            
            <Text className="text-white mb-10 font-semibold">
                Doğudunuz gün Ay'ın konumunu görmek{"\n"} için lütfen istenilen bilgileri doldurun.{" "}
            </Text>

            <View>
                <Text className="text-white text-center mb-1 text-3xl font-bold">AD</Text>
                <TextInput className="text-white bg-primary w-[251px] h-[44] rounded-full"
                value={form.name}
                onChangeText={(e) => setForm({ ...form, name: e })}
                />
            </View>

            <View className="mt-6">
                <Text className="text-white text-center mb-1 text-3xl font-bold">Soyad</Text>
                <TextInput className="text-white bg-primary w-[251px] h-[44] rounded-full"
                value={form.surname}
                onChangeText={(e) => setForm({ ...form, name: e })}
                />
            </View>

            <View className="mt-6">
                <Text className="text-white text-center mb-1 text-3xl font-bold">Doğum Tarihi</Text>
                <TextInput className="text-white bg-primary w-[251px] h-[44] rounded-full"
                value={form.surname}
                onChangeText={(e) => setForm({ ...form, name: e })}
                />
            </View>

            <View className="mt-6">
                <TouchableOpacity className="bg-customGreen rounded-full w-[138px] h-[35] justify-center items-center"
                onPress={() => router.push('/loading')} 
                >
                    <Text className="  text-white text-center text-3xl font-semibold">ONAYLA</Text>
                </TouchableOpacity>
            </View>
            

            
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

export default FormFill