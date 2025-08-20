import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
  //   console.log(item);

  return (
    <View className="flex-row items-center bg-white p-3 shadow-2xl  rounded-3xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex-1 flex space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.desc}</Text>
        </View>
        <View className="flex-row items-center justify-between pl-3">
          <Text className="text-gray-700 text-lg font-bold">₹{item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus stroke={"white"} width="20" height="20" />
            </TouchableOpacity>
<Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus stroke={"white"} width="20" height="20" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
