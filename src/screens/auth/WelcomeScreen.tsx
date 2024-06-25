import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

import ButtonOutline from "@/components/ButtonOutline";
import Button from "@/components/Button";
import Breaker from "@/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const blurhash = "LVL}85xa+?%0$yRTn5WB{]V@pIr=";

  const { navigate:navigateAuth }: NavigationProp<SplashNavigationType> = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white p-2">
      <StatusBar style="auto" />
      <View className="px-4 w-full justify-center items-center space-y-6 h-full  ">
        <View className="px-4 w-full items-center">
          <Animated.View
            className={"flex-row justify-center items-center"}
            entering={FadeInRight.duration(100).springify()}
          >
            <View className="pr-2">
              <View className="w-20 h-20 overflow-hidden ">
                <Image
                  source={require("../../../assets/images/react-logo.png")}
                  placeholder={blurhash}
                  transition={1000}
                  contentFit="cover"
                  className="w-full h-full"
                />
              </View>
            </View>
          </Animated.View>
        </View>
        <View className="justify-center items-center">
          <Animated.Text
            entering={FadeInDown.duration(100).delay(200).springify()}
            className={"text-neutral-800 text-3xl font-medium leading-[60px] "}
            style={{ fontFamily: "PlusJakartaSansBold" }}
          >
            Welcome
          </Animated.Text>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
          >
            <Button title="Login" />
          </Animated.View>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
          >
            <ButtonOutline title="Sign Up" />
          </Animated.View>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
          >
            <Breaker />
          </Animated.View>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(600).springify()}
          >
            <ButtonOutline title="Continue with Google">
              <AntDesign name="google" size={20} color="gray" />
            </ButtonOutline>
          </Animated.View>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(700).springify()}
          >
            <ButtonOutline title="Continue with Apple">
              <AntDesign name="apple1" size={20} color="gray" />
            </ButtonOutline>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}
