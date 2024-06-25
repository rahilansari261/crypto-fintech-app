import { Text, Pressable, View } from "react-native";
import React from "react";

interface ButtonOutlineProps {
  title: string;
  action?: () => void;
  children?: React.ReactNode;
}
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  title,
  action,
  children,
}: ButtonOutlineProps) => {
  return (
    <Pressable
      className="border-2 border-neutral-400 rounded-lg  items-center py-3 flex-row justify-center  "
      onPress={action}
    >
      {children && <Text> {children} </Text>}
      <Text className="text-neutral-400 font-bold text-lg">{title}</Text>
    </Pressable>
  );
};

export default ButtonOutline;
