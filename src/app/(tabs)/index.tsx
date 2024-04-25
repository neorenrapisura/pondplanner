import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import FloatingAddButton from "../../components/FloatingAddButton";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          marginLeft: 30,
          marginTop: 18,
          fontSize: 26,
          fontWeight: "bold"
          // fontFamily: "Helvetica Neue"
        }}
      >
        Welcome Back,{"\n"}Neoren
      </Text>
      <FloatingAddButton onPressAdd={() => null} />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  welcomeText: {
    marginLeft: 5
  }
});
