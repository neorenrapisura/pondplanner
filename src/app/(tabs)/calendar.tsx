import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";

import Header from "../../components/Header";

import dayjs from "dayjs";

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

  const [vaults, setVaults] = useState<string[]>(["Chase", "TD", "Savings"]);
  const [selectedVaults, setSelectedVaults] = useState<string[]>([]);
  const handleToggleVault = (name: string) => {
    const newList = [...selectedVaults];
    newList.push(name);
    setSelectedVaults(newList);
    console.log(name);
  };
  const handleNewVault = (name: string) => {
    const newList = [...vaults];
    newList.push(name);
    setVaults(newList);
  };

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
  }
});
