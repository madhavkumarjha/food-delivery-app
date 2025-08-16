import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

export default function FeaturedRow({ title, description, restaurants }) {
  // console.log(title, description, restaurants);

  return (
    <View className="">
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
