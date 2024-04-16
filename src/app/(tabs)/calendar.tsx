import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import CalendarDay from "../../components/CalendarDay";

interface day {
  date: number;
  id: number;
}

const sampleDays: day[] = [];
for (let i = 1; i <= 31; i++) {
  sampleDays.push({ date: i, id: i });
}

const daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "s"];

const calendar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={sampleDays}
        numColumns={7}
        renderItem={({ item }) => <CalendarDay date={item.date} />}
      />
    </SafeAreaView>
  );
};

export default calendar;

const styles = StyleSheet.create({});
