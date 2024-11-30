import React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";

interface MoonPhaseDisplayProps {
  moonPhaseStr?: string; // Optional, in case the prop is not provided
  name: string;
  birthDay?: string; // Optional, since it may be hidden
  isEnabled: boolean; // Determines if the birthDay should be displayed
}

const MoonPhaseDisplay: React.FC<MoonPhaseDisplayProps> = ({
  moonPhaseStr = "First Quarter",
  name,
  birthDay,
  isEnabled,
}) => {
  const MoonPhase = (moonPhase: string): ImageSourcePropType => {
    switch (moonPhase) {
      case "New Moon":
        return require("../assets/images/new-moon.webp");
      case "Waxing Crescent":
        return require("../assets/images/waxing-crescent.webp");
      case "First Quarter":
        return require("../assets/images/first-quarter.webp");
      case "Waxing Gibbous":
        return require("../assets/images/waxing-gibbous.webp");
      case "Full Moon":
        return require("../assets/images/full.webp");
      case "Waning Gibbous":
        return require("../assets/images/waning-gibbous.webp");
      case "Third Quarter":
        return require("../assets/images/third-quarter.webp");
      case "Waning Crescent":
        return require("../assets/images/waning-crescent.webp");
      default:
        return require("../assets/images/first-quarter.webp");
    }
  };

  return (
    <View className="items-center justify-center mt-12">
      <Image
        source={MoonPhase(moonPhaseStr)}
        className="w-[357px] h-[342px]"
        resizeMode="contain"
      />
      <Text className="text-white mt-3 font-semibold text-lg">{name}</Text>
      {!isEnabled && birthDay && (
        <Text className="text-white mt-3 font-semibold text-3xl">
          {birthDay}
        </Text>
      )}
    </View>
  );
};

export default MoonPhaseDisplay;
