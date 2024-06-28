import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate("Welcome");
    }, 3000);
  }, []);
  const blurhash = "LVL}85xa+?%0$yRTn5WB{]V@pIr=";
  return (
    <SafeAreaView className="flex-1 justify-center items-center ">
      <StatusBar style="auto" />
      <View className="px-4 w-full items-center ">
        <Animated.View
          className={"flex-row justify-center items-center"}
          entering={FadeInRight.duration(100).springify()}
        >
          <View className="pr-2">
            <View className="w-20 h-20 overflow-hidden ">
              <Image
                source={require("../../../assets/splash.png")}
                placeholder={blurhash}
                transition={1000}
                contentFit="cover"
                className="w-full h-full"
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          className={"flex-row justify-center items-center"}
          entering={FadeInRight.duration(100).delay(200).springify()}
        >
          <Text
            className="text-neutral-600 text-xl leading-[60px] pl-1 "
            style={{ fontFamily: "PlusJakartaSans" }}
          >
            STACK
          </Text>
          <Text
            className="text-[#31aca3] text-xl leading-[60px] pl-1 "
            style={{ fontFamily: "PlusJakartaSansBoldItalic" }}
          >
            CRYPTO
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
