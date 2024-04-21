import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetView,
  TouchableOpacity
} from "@gorhom/bottom-sheet";
import type {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import Header from "../../components/Header";

import dayjs from "dayjs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const calendar = () => {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());

  function handleJumpToday(): void {
    setMonth(dayjs().month());
    setYear(dayjs().year());
  }

  function handleJumpToMonth(_month: number, _year: number): void {
    setMonth(_month);
    setYear(_year);
  }

  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>holay molay</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["48%"]}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

      {/* <Header
        month={dayjs().month(month).format("MMMM")}
        year={year.toString()}
        onJumpToday={handleJumpToday}
        onJumpToMonth={handleJumpToMonth}
      /> */}
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
