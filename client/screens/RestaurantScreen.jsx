import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function RestaurantScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      <View className="flex-row items-center space-x-2 px-4 pb-4">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          </View>

      </View>
    </SafeAreaView>
  )
}