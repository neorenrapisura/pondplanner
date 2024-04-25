import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import dayjs from "dayjs";

import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

import Header from "../../components/Header";
import FloatingAddButton from "../../components/FloatingAddButton";

import type Vault from "../../types/Vault";

const calendar = () => {
  const [month, setMonth] = useState(dayjs().month());
  const [date, setDate] = useState(dayjs().date());
  const [year, setYear] = useState(dayjs().year());
  const setCalendarDate = (month: number, date: number, year: number): void => {
    setMonth(month);
    setDate(date);
    setYear(year);
  };

  const handleJumpToday = (): void => {
    setCalendarDate(dayjs().month(), dayjs().date(), dayjs().year());
  };

  const handleJumpToDate = (date: Date): void => {
    setCalendarDate(
      dayjs(date).month(),
      dayjs(date).date(),
      dayjs(date).year()
    );
  };

  const [vaults, setVaults] = useState<Vault[]>([
    { name: "Checking", color: "#00C8FF" },
    { name: "Savings", color: "#FFC55C" },
    { name: "Test", color: "#FF3DA8" }
  ]);
  const [selectedVaults, setSelectedVaults] = useState<string[]>([]);

  const handleToggleVault = (name: string) => {
    const arr = [...selectedVaults];

    if (arr.includes(name)) {
      const index = arr.indexOf(name);
      if (index === -1) return;
      arr.splice(index, 1);
    } else {
      arr.push(name);
    }
    setSelectedVaults(arr);
  };

  const handleNewVault = (name: string, color: string) => {
    const newList = [...vaults];
    newList.push({ name: name, color: color });
    setVaults(newList);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        month={month}
        date={date}
        year={year}
        onJumpToday={handleJumpToday}
        onJumpToDate={handleJumpToDate}
        vaults={vaults}
        selectedVaults={selectedVaults}
        onToggleVault={handleToggleVault}
        onAddVault={handleNewVault}
        total={159200.59}
      />

      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          paddingHorizontal: 20
        }}
      >
        {[...Array(7)].map((_, i) => (
          <Text>{dayjs().weekday(i).format("ddd")}</Text>
        ))}
      </View> */}

      <FloatingAddButton onPressAdd={() => null} />
    </SafeAreaView>
  );
};

export default calendar;

const styles = StyleSheet.create({});
