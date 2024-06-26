import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React from "react";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { height, width } = Dimensions.get("window");
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
        ></View>
      </View>
    </View>
  );
}
