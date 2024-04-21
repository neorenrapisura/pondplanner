import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

interface Props {
  month: string;
  year: string;
}

const MonthDisplay = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: 10,
        borderBottomWidth: 1
      }}
    >
      <Pressable
        style={{ ...styles.button, width: 50, borderTopRightRadius: 1 }}
        onPress={props.onPrevMonth}
      >
        <Entypo name="chevron-small-left" size={45} color="black" />
      </Pressable>

      <Pressable
        style={{
          ...styles.button,
          width: "50%",
          backgroundColor: "rgba(50, 50, 50, 0.075)",
          borderRadius: 10
        }}
      >
        <Text style={{ fontSize: 20 }}>{`${props.month} ${props.year}`}</Text>
      </Pressable>

      <Pressable
        style={{ ...styles.button, width: 50 }}
        onPress={props.onNextMonth}
      >
        <Entypo name="chevron-small-right" size={45} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MonthDisplay;
