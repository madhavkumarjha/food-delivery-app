import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { featured } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/slices/restaurantSlice";
import { emptyCart } from "../redux/slices/cartSlice";

// import MapView, { Marker } from "expo-maps"; // Uncommen if using Expo Maps/react-native-maps but it is no longer exist for expo go only available for bare workflow

/**
 * 
 *
export default function DeliveryScreen() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker 
      coordinate={{ 
      latitude: 37.78825, 
      longitude: -122.4324 
      }} 
      title={restaurant.name}
      description={restaurant.description}
      pinColor={themeColors.bgColor(1)}
      />
    </MapView>
  );
}
 */

const leafletHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Leaflet Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <style>#map { height: 100vh; width: 100vw; }</style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    var marker = L.marker([51.505, -0.09]).addTo(map);

    function updateLocation(lat, lng, message) {
      map.setView([lat, lng], 13);
      marker.setLatLng([lat, lng])
        .bindPopup(message)
        .openPopup();
    }
  </script>
</body>
</html>
`;

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log(
  //   "DeliveryScreen",
  //   restaurant.lat,
  //   restaurant.long,
  //   restaurant.name
  // );
  // console.log("DeliveryScreen", restaurant);

  const cancelOrder=()=>{
    navigation.navigate("Home");
    dispatch(emptyCart());
  }
  

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: leafletHtml }}
        style={{ flex: 1 }}
        injectedJavaScript={`
    updateLocation(${restaurant.lat}, ${restaurant.long}, "${restaurant.name}<br>${restaurant.desc}");
    true;
  `}
      />
      <View className="rounded-t-3xl -mt-12 bg-white relative">
         <View className="flex-row items-center justify-between px-5 pt-10">
          <View>
           <Text className="text-lg text-gray-700 font-semibold">
             Estimated Arrival
           </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 font-semibold text-gray-700">
              Your order is own its way!
            </Text>
          </View>
          <Image className="w-24 h-24" source={require('../assets/images/bikeguy2.webp')}/>
        </View> 
        <View 
        style={{ backgroundColor: themeColors.bgColor(0.8) }}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View className="p-1 rounded-full">
            <Image
              source={require("../assets/images/deliveryGuy.webp")}
              className="w-16 h-16 rounded-full"
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">
              Noor Ahmad
            </Text>
            <Text className="font-semibold text-white">
              Your Rider
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3 gap-2">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
              <Icon.X  stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
