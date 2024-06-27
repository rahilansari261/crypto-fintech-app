import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import useCachedResources from "./hooks/useCachedResources";
import { useUserStore } from "./store/useUserStore";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const { user, session } = useUserStore();

  useEffect(() => {
    console.log(user, session);
  }, [user, session]);

  if (!isLoadingComplete) return null;
  return (
    <Container>
      <StatusBar style={"auto"} />
      <RootNavigation />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;
