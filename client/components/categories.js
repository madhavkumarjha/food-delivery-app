import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
// import { categories } from "../constants";
import { getCategories } from "../sanity/api";
import { urlFor } from "../sanity/index";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories().then((data) => {
      setCategories(data);
    })
  },[])

  

  return (
    <View className="mt-4">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="overflow-visible "
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category._id === activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View className="flex justify-center items-center mr-6" key={index}>
              <TouchableOpacity
                className={"p-1 rounded-full shadow bg-gray-200" + btnClass}
                onPress={() => setActiveCategory(category._id)}
              >
                <Image
                  source={{uri: urlFor(category.image).url()}}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={"text-sm" + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
