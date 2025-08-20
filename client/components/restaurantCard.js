import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg"
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          elevation: 5,
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="pb-4 px-3 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1 gap-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />

            <Text className="text-xs">
              <Text className="text-green-700">{item.rating}</Text>
              <Text className="text-gray-500">
                {" "}
                ({item.reviews} reviews) .{" "}
                <Text className="font-semibold">{item.type}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 gap-1 my-1">
            <Icon.MapPin stroke="gray" width="15" height="15" />
            <Text className="text-xs text-gray-700">
              Nearby. {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
