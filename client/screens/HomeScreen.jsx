import { View, Text, TextInput, ScrollView, Platform } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";
import { getFeaturedRestaurants } from "../sanity/api";

export default function HomeScreen() {
  // console.log(featured[0].restaurants);
  const [featuredRestaurants, setFeaturedRestaurants] = React.useState([]);
  useEffect(()=>{
    // Fetch featured restaurants from Sanity
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
      // console.log(data);
      
    }).catch((error) => {
      console.error("Error fetching featured restaurants:", error);
    });
  },[])

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-4 gap-1">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search stroke="gray" width="25" height="25" />
          <TextInput className="ml-2 flex-1" placeholder="Restaurant" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin stroke="gray" width="20" height="20" />
            <Text className="text-gray-600">Delhi , India</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            stroke="white"
            width="20"
            height="20"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 20 : 70,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* features */}
        <View className="mt-5">
          {featuredRestaurants.map((item, index) => {
            // console.log(item.title);

            return (
              <FeaturedRow
                key={index}
                title={item.name}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
