import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

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
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {
            restaurants.map((restaurant, index) => {
                return(
                    <RestaurantCard
                    item={restaurant}
                    key={index}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  );
}
