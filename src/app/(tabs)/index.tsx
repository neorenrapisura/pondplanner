import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
