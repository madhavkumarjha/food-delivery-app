import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const item = params;
  const navigation = useNavigation();

  return (
    <View>
      <CartIcon />
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50  p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white pt-6 -mt-12"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row my-1 space-x-2 gap-1">
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
              <View className="flex-row items-center space-x-1 gap-1">
                <Icon.MapPin stroke="gray" width="15" height="15" />
                <Text className="text-xs text-gray-700">
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.desc}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
