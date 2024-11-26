import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getMoonPhase } from "../utils/moonPhase";

const FormFill = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
  });

  const [isPrintDate, setIsPrintDate] = useState(false);

  const [date, setDate] = useState<Date | null>(null);

  const moonPhase = getMoonPhase(date);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsPrintDate(true);
    }
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange,
      mode: "date",
    });
  };

  const handleSubmit = () => {
    /*if (!form.name || !form.surname || !date) {
      Alert.alert("Eksik Bilgi", "Lütfen tüm alanları doldurunuz.");
      return;
    }*/
    router.push({
      pathname: "/loading",
      params: {
        name: `${form.name} ${form.surname}`,
        birthDay: date?.toLocaleDateString("tr-TR"),
        moonPhase: moonPhase,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-black h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          <View className="h-[93%] items-center justify-center">
            <Text className="text-white mb-10 font-semibold">
              Doğudunuz gün Ay'ın konumunu görmek{"\n"} için lütfen istenilen
              bilgileri doldurun.{" "}
            </Text>

            <View>
              <Text className="text-white text-center mb-1 text-3xl font-bold">
                AD
              </Text>
              <TextInput
                className="text-black font-semibold text-center text-lg bg-primary w-[251px] h-[44px] rounded-full"
                value={form.name}
                onChangeText={(e) => setForm({ ...form, name: e })}
              />
            </View>

            <View className="mt-6">
              <Text className="text-white text-center mb-1 text-3xl font-bold">
                SOYAD
              </Text>
              <TextInput
                className="text-black font-semibold text-center text-lg bg-primary w-[251px] h-[44px] rounded-full"
                value={form.surname}
                onChangeText={(e) => setForm({ ...form, surname: e })}
              />
            </View>

            <View className="mt-6">
              <Text className="text-white text-center mb-1 text-3xl font-bold">
                DOĞUM TARİHİ
              </Text>
              <TouchableOpacity
                className="bg-primary w-[251px] h-[44px] rounded-full justify-center items-center"
                onPress={showDatepicker}
              >
                <Text className=" text-black font-semibold text-center text-lg">
                  {isPrintDate && date ? date.toLocaleDateString("tr-TR") : ""}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-10">
              <TouchableOpacity
                className="bg-customGreen rounded-full w-[138px] h-[35px] justify-center items-center"
                onPress={handleSubmit}
              >
                <Text className="  text-white text-center text-3xl font-semibold">
                  ONAYLA
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

export default FormFill;
