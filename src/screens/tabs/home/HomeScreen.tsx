import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "@/components/Avatar";
import useSupabaseAuth from "../../../../hooks/useSupabaseAuth";
import { useFocusEffect } from "@react-navigation/native";
import { useUserStore } from "../../../../store/useUserStore";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const HomeScreen = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getUserProfile } = useSupabaseAuth();
  const { session } = useUserStore();

  async function handleGetProfile() {
    setLoading(true);
    try {
      const { data, error, status } = await getUserProfile();
      if (error && status !== 406) {
        throw error;
      } else if (data) {
        setAvatarUrl(data?.avatar_url);
        setUsername(data?.email);
        setLoading(false);
      }
    } catch (error) {
      console.log("error aa gyi", error);
    } finally {
      setLoading(false);
    }
  }

  // useFocusEffect(
  //   useCallback(() => {
  //     if (session) {
  //       handleGetProfile();
  //     }
  //   }, [session])
  // );

  console.log("avatarUrl, username", avatarUrl, username);
  const blurhash = "LVL}85xa+?%0$yRTn5WB{]V@pIr=";
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative">
        <View className="w-full flex-row justify-between items-center px-4">
          <View className="w-3/4 flex-row space-x-2">
            <View className="justify-center items-center">
              <View className="h-12 w-12 rounded-2xl overflow-hidden">
                <Avatar url={avatarUrl} size={50} />
              </View>
            </View>
            <View>
              <Text className="text-lg font-bold">
                Hi, {username ? username : "User"}
              </Text>
              <Text className="text-sm text-neutral-500">Have a good day</Text>
            </View>
          </View>
          <View className="py-6">
            <View className="bg-neutral-700 rounded-lg p-1">
              <Ionicons name="menu" size={24} color="white" />
            </View>
          </View>
        </View>

        <View className="mx-4 bg-neutral-800 rounded-[34px] overflow-hidden mt-4 mb-4">
          <View className="bg-[#0DF69E] justify-center items-center py-6 rounded-[34px]">
            <Text className="text-sm font-medium text-neutral-700">
              Total Balance
            </Text>
            <Text className="text-3xl font-extrabold">$2,430.00</Text>
          </View>
          <View className="justify-between items-center flex-row py-4">
            <View className="w-1/4 justify-center items-center space-y-2">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={require("../../../../assets/images/money-send.png")}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1"
                />
              </View>
              <Text className=" text-white">Send to</Text>
            </View>

            <View className="w-1/4 justify-center items-center space-y-2">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={require("../../../../assets/images/money-receive.png")}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1"
                />
              </View>
              <Text className=" text-white">Request</Text>
            </View>

            <View className="w-1/4 justify-center items-center space-y-2">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={require("../../../../assets/images/card-add.png")}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1"
                />
              </View>
              <Text className=" text-white">Top up</Text>
            </View>

            <View className="w-1/4 justify-center items-center space-y-2">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={require("../../../../assets/images/more.png")}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1"
                />
              </View>
              <Text className=" text-white">More</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
