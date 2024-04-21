import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  type DateTimePickerEvent
} from "@react-native-community/datetimepicker";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import MonthDisplay from "./calendar/header/MonthDisplay";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

interface Props {
  month: string;
  year: string;
  onJumpToday: () => void;
  onJumpToMonth: (month: number, year: number) => void;

  // banks: string[];
  // selectedBanks: string[];
  // onToggleBank: (bank: string) => void;

  // total: number;
}

const Header = (props: Props) => {
  const [dateDropdownIcon, setDateDropdownIcon] = useState<
    "triangle-down" | "triangle-up"
  >("triangle-down");
  const [showDatePicker, setShowDatePicker] = useState(false);

  function togglePressedDate(): void {
    setDateDropdownIcon(
      dateDropdownIcon === "triangle-up" ? "triangle-down" : "triangle-up"
    );
    setShowDatePicker(!showDatePicker);
  }

  function handleDateChange(
    event: DateTimePickerEvent,
    selectedDate?: Date
  ): void {
    if (event.type === "set") {
      // ...
    } else {
      togglePressedDate();
    }
  }

  return (
    <View needsOffscreenAlphaCompositing={true}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          paddingHorizontal: 20,
          paddingBottom: 10,
          borderBottomWidth: 0.5
        }}
      >
        <TouchableOpacity style={{ marginRight: 12 }}>
          <MaterialIcons name="today" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={togglePressedDate}
        >
          <Text style={{ fontSize: 22, marginRight: 10 }}>
            {props.month} {props.year}
          </Text>
          <Octicons name={dateDropdownIcon} size={24} color="black" />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={"date"}
            display={"default"}
            onChange={handleDateChange}
            is24Hour={true}
          />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
