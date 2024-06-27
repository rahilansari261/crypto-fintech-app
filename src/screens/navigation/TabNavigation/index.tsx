import { View, Text, Pressable } from "react-native";
import React from "react";
import useSupabaseAuth from "../../../../hooks/useSupabaseAuth";
import Button from "@/components/Button";

export default function TabNavigation() {
  const { signOut } = useSupabaseAuth();
  function handleSignout() {
    signOut();
  }
  return (
    <View className="flex-1 items-center justify-center bg-blue-500 ">
      <View className="w-full px-4">
        <Button title="Sign Out" action={handleSignout} />
      </View>
    </View>
  );
}
