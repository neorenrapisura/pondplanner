import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import CalendarDay from "../../components/CalendarDay";
import CalendarHeader from "../../components/CalendarHeader";

interface day {
  date: number;
  id: number;
}

const sampleDays: day[] = [];
for (let i = 1; i <= 31; i++) {
  sampleDays.push({ date: i, id: i });
}

const DAYS_OF_THE_WEEK = ["S", "M", "T", "W", "T", "F", "S"];

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

const calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(1);

  return (
    <SafeAreaView>

      {/* <CalendarHeader
        month={selectedMonth}
        year={2024}
        accounts={["Checking", "Savings", "TD", "Chase"]}
        selectedAccounts={["Checking"]}
        onPrevMonth={() => {
          setSelectedMonth(selectedMonth - 1);
        }}
        onNextMonth={() => {
          setSelectedMonth(selectedMonth + 1);
        }}
      /> */}

      {/* <View style={{ flex: 7, flexDirection: "row" }}>
        {DAYS_OF_THE_WEEK.map((item) => {
          return <Text style={{}}>{item}</Text>;
        })}
      </View> */}
      {/* <FlatList
        data={sampleDays}
        numColumns={7}
        renderItem={({ item }) => <CalendarDay date={item.date} />}
      /> */}
    </SafeAreaView>
  );
};

export default calendar;
