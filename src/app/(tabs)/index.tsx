import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomePage = () => {
  return (
    <SafeAreaView>
      <Text style={{ marginLeft: 30, marginTop: 30, fontSize: 25 }}>
        Welcome Back,{"\n"}Neoren
      </Text>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  welcomeText: {
    marginLeft: 5
  }
});
