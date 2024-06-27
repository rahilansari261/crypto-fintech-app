import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "@/components/Button";
import ButtonOutline from "@/components/ButtonOutline";
import Breaker from "@/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import useSupabaseAuth from "../../../hooks/useSupabaseAuth";
import { Alert } from "react-native";
import { useUserStore } from "../../../store/useUserStore";

export default function RegisterScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { height, width } = Dimensions.get("window");

  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();
  const { signUpWithEmail } = useSupabaseAuth();
  const { setSession, setUser } = useUserStore();

  async function handleRegister() {
    setIsLoading(true);
    const { error, data } = await signUpWithEmail(email, password);
    if (error) {
      setIsLoading(false);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
    if (data.session && data.user) {
      setIsLoading(false);

      setSession(data.session);
      setUser(data.user);
    }
  }

  return (
    <View className="flex-1 ">
      {isLoading && (
        <View className="absolute bg-gray-500 h-full w-full justify-center items-center">
          <View>
            <ActivityIndicator
              size={"large"}
              color={"white"}
            ></ActivityIndicator>
          </View>
        </View>
      )}
      <View className="justify-center items-center flex-1 relative ">
        <View
          className="justify-center w-full px-4 space-y-4 "
          style={{
            height: height * 0.75,
          }}
        >
          <Animated.View
            className={"justify-center items-center"}
            entering={FadeInDown.duration(100).springify()}
          >
            <Text
              className="text-neutral-800 text-2xl leading-[60px] "
              style={{ fontFamily: "PlusJakartaSansBold" }}
            >
              Register to join us
            </Text>
            <Text
              className="text-neutral-500 text-sm font-medium "
              style={{ fontFamily: "PlusJakartaSansBold" }}
            >
              Welcome!, Please enter your details.
            </Text>
          </Animated.View>

          <Animated.View
            className={"py-8 space-y-8"}
            entering={FadeInDown.duration(100).delay(200).springify()}
          >
            <View className="border-2 border-gray-400 rounded-lg w-full ">
              <TextInput
                className="p-4"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
              />
            </View>
            <View className="border-2 border-gray-400 rounded-lg w-full ">
              <TextInput
                className="p-4"
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                autoCapitalize="none"
              />
            </View>
          </Animated.View>

          <Animated.View
            className={""}
            entering={FadeInDown.duration(100).delay(300).springify()}
          >
            <Button title="Register" action={handleRegister} />
          </Animated.View>

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
              className={"flex-row justify-center "}
            >
              <Text className="text-neutral-500 text-lg font-medium leading-[38px]">
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => navigateAuth("Login")}>
                <Text
                  className="text-neutral-800 text-lg font-bold leading-[38px] text-center "
                  style={{ fontFamily: "PlusJakartaSansBold" }}
                >
                  Login
                </Text>
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
}
