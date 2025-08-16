import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="overflow-visible "
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View className="flex justify-center items-center mr-6" key={index}>
              <TouchableOpacity
                className={"p-1 rounded-full shadow bg-gray-200" + btnClass}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  source={category.image}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={"text-sm" + textClass}>{category.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
