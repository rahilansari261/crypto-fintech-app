import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-pink-600">
      <StatusBar style="auto" />
      <View className="px-4 w-full items-center ">
        <Animated.View>
          <Text>Rahil</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
