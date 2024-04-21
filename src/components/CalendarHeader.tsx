import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MonthDisplay from "./calendar/header/MonthDisplay";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

interface Props {
  month: number;
  year: number;
  onNextMonth: () => void;
  onPrevMonth: () => void;

  accounts: string[];
  selectedAccounts: string[];
  onToggleAccount: (name: string) => void;
}

const CalendarHeader = ({
  month,
  year,
  onNextMonth,
  onPrevMonth,

  accounts,
  selectedAccounts,
  onToggleAccount
}: Props) => {
  return (
    <View needsOffscreenAlphaCompositing={true} style={{}}>
      <MonthDisplay
        month={MONTHS[month]}
        year={"2024"}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />

      {/* Bank account picker */}

      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <ScrollView
          style={{
            marginHorizontal: 20,
            paddingVertical: 5,
            width: "50%"
          }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {accounts.map((account) => (
            <View
              key={account}
              style={{
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                marginHorizontal: 5,
                paddingHorizontal: 30,
                borderRadius: 100
              }}
            >
              <Text>{account}</Text>
            </View>
          ))}
        </ScrollView>
        <Text>$10,300.56</Text>
      </View>
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

export default CalendarHeader;
