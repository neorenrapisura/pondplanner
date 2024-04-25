import React from "react";
import { Tabs } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import * as Haptics from "expo-haptics";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.defaultGreen,
        tabBarInactiveTintColor: Colors.gray,
        tabBarLabelStyle: { fontSize: RFValue(10) },
        tabBarStyle: { borderTopWidth: 0, paddingTop: 5 }
      }}
      screenListeners={{
        tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" size={21} color={color} />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
