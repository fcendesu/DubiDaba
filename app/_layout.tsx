import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{headerShown:false}} />
      <Stack.Screen name="form-fill"
      options={{headerShown:false}} />
      <Stack.Screen name="loading"
      options={{headerShown:false}} />
      
    </Stack>
  );
}
