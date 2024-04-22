import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  month: number;
  date: number;
  year: number;
  onJumpToday: () => void;
  onJumpToDate: (date: Date) => void;

  vaults: string[];
  selectedVaults: string[];
  onToggleVault: (bank: string) => void;

  total: number;
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
          style={{ marginRight: 10 }}
          onPress={props.onJumpToday}
        >
          <Ionicons name="today" size={30} color="black" />
        </TouchableOpacity>

        {/* Month and year display */}

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
          onPress={showDatePicker}
        >
          <Text style={{ fontSize: 20, marginRight: 10 }}>
            {dayjs().month(props.month).format("MMM")} {props.year.toString()}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          themeVariant={"light"}
          date={dayjs()
            .month(props.month)
            .date(props.date)
            .year(props.year)
            .toDate()}
        />

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 17, color: "#29a329", marginRight: 10 }}>
            ${props.total}
          </Text>
          <Octicons name={dateDropdownIcon} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomWidth: 0.5
        }}
        contentContainerStyle={{
          alignItems: "center",
          marginTop: 3,
          paddingBottom: 3
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {props.vaults.map((item, index) => (
          <>
            <TouchableOpacity
              style={
                (index === 0 && { ...styles.vaultButton, marginLeft: 0 }) ||
                styles.vaultButton
              }
              key={item}
            >
              <Text style={{ fontSize: 13 }}>{item}</Text>
            </TouchableOpacity>
            {index === props.vaults.length - 1 && (
              <TouchableOpacity style={styles.vaultButton} key="_newbutton">
                <AntDesign name="plus" size={21} color="black" />
              </TouchableOpacity>
            )}
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  vaultButton: {
    paddingHorizontal: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 6
  }
});
