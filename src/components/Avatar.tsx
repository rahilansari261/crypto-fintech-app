import React from "react";
import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import supabase from "../../lib/supabase";
interface Props {
  size: number;
  url: string | null;
  onUpload?: (filePath: string) => void;
  showUpload?: boolean;
}
const Avatar = ({ url, size = 150, onUpload, showUpload }: Props) => {
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const avatarSize = { height: size, width: size };
  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
        console.log(error);
      }
      const fr = new FileReader();
      fr.readAsDataURL(data);
      fr.onload = () => {
        setAvatarUrl(fr.result as string);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading Image: error.message");
      }
    }
  }
  async function uploadAvatar() {}
  return (
    <View>
      {avatarUrl ? (
        <View className="relative">
          <Image
            source={{ uri: avatarUrl }}
            accessibilityLabel="Avatar"
            style={[avatarSize, styles.avatar, styles.image]}
          />
        </View>
      ) : (
        <View
          className="justify-center items-center"
          style={[avatarSize, styles.avatar, styles.image]}
        >
          <ActivityIndicator color="white" />
        </View>
      )}

      {showUpload && (
        <View className="absolute bottom-0 right-0">
          {!uploading ? (
            <Pressable>
              <MaterialIcons name="cloud-upload" size={30} color="black" />
            </Pressable>
          ) : (
            <ActivityIndicator color={"white"} />
          )}
        </View>
      )}
    </View>
  );
};
export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "relative",
  },
  image: {
    objectFit: "cover",
    paddingTop: 0,
  },
  noImage: {
    backgroundColor: "gray",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgb(200, 200, 200)",
    borderRadius: 20,
  },
});
