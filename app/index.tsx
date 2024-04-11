import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <Stack.Screen options={{}} />
    </SafeAreaView>
  );
};

export default HomePage;
