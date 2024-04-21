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
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import dayjs from "dayjs";

interface Props {
  month: string;
  year: string;
  onJumpToday: () => void;
  onJumpToDate: (date: Date) => void;

  // banks: string[];
  // selectedBanks: string[];
  // onToggleBank: (bank: string) => void;

  // total: number;
}

const Header = (props: Props) => {
  const [dateDropdownIcon, setDateDropdownIcon] = useState<
    "triangle-down" | "triangle-up"
  >("triangle-down");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setDateDropdownIcon("triangle-up");
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setDateDropdownIcon("triangle-down");
  };

  const handleConfirm = (date: Date) => {
    props.onJumpToDate(date);
    hideDatePicker();
  };

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
        <TouchableOpacity
          style={{ marginRight: 12 }}
          onPress={props.onJumpToday}
        >
          <MaterialIcons name="today" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={showDatePicker}
        >
          <Text style={{ fontSize: 22, marginRight: 10 }}>
            {props.month} {props.year}
          </Text>
          <Octicons name={dateDropdownIcon} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        themeVariant={"light"}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
