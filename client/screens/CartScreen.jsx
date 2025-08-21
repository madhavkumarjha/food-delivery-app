import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { featured } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import { urlFor } from "../sanity";
import EmptyCart from "../components/emptyCart";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState([]);

  const deliveryFee = 20;

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  // ✅ show empty cart properly
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }
  
  return (
    <View className="flex-1 bg-white mt-10 rounded-t-2xl">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-xl font-bold">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="px-4 flex-row items-center"
      >
        <Image
          source={require("../assets/images/bikeguy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 gap-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image source={{uri:urlFor(dish.image).url()}} className="w-14 h-14 rounded-full" />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">₹{dish.price}</Text>
              <TouchableOpacity
                className="rounded-full p-1"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromCart({ id: dish._id }))}
              >
                <Icon.Minus stroke="white" width="20" height="20" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* total */}
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4 gap-2"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">₹{cartTotal}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">₹{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">₹{cartTotal+deliveryFee}</Text>
        </View>
        <TouchableOpacity
          className="rounded-full p-3"
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={() => navigation.navigate("OrderPrepairing")}
        >
          <Text className="text-white text-center font-bold text-lg">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
