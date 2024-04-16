import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  date: number;
}

const CalendarDay = ({ date }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: `${100 / 7}%`, // 100% devided by the number of rows you want
        alignItems: "center",
        justifyContent: "center",
        height: RFValue(40),
        borderStyle: "solid"
      }}
    >
      <Text>{date}</Text>
    </View>
  );
};

export default CalendarDay;

const styles = StyleSheet.create({});
