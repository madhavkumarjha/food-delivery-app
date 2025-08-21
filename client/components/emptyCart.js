import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function EmptyCart() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center mt-15  px-6 bg-white">
      {/* Cart Icon */}
      <View className="bg-gray-100 rounded-full p-6 mb-6">
        <Icon.ShoppingCart size={64} color="#9ca3af" strokeWidth={1.5} />
      </View>

      {/* Heading */}
      <Text className="text-2xl font-semibold text-gray-800">
        Your cart is empty
      </Text>

      {/* Subtext */}
      <Text className="text-gray-500 text-center mt-2 mb-6">
        Looks like you haven’t added anything yet.{"\n"}
        Explore products and add them to your cart.
      </Text>

      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")} 
        className="px-6 py-3 bg-indigo-600 rounded-2xl shadow-md"
      >
        <Text className="text-white font-medium text-base">Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}
