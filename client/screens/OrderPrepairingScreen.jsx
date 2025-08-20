import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function OrderPrepairingScreen() {
const navigation = useNavigation();

 useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate("Delivery");
      }, 3000);

      return () => clearTimeout(timer); // cleanup when unfocus
    }, [navigation])
  );

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../assets/images/delivery.gif")}
        style={{ width: 280, height: 220 }}
        
        contentFit="cover"
        autoplay
      />
    </View>
  );
}
