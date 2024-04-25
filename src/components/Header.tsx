import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { Fragment, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import type Vault from "../types/Vault";
import VaultTabButton from "./VaultTabButton";
import { styles as VaultTabButtonStyles } from "../components/VaultTabButton";

interface Props {
  month: number;
  date: number;
  year: number;
  onJumpToday: () => void;
  onJumpToDate: (date: Date) => void;

  vaults: Vault[];
  selectedVaults: string[];
  onToggleVault: (name: string) => void;
  onAddVault: (name: string, color: string) => void;

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
      {/* date and total balance display */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 18,
          paddingHorizontal: 20,
          paddingBottom: 5
          // borderBottomWidth: 0.5
        }}
      >
        {/* today button */}
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={props.onJumpToday}
        >
          <Ionicons name="today" size={30} color="#FF5741" />
        </TouchableOpacity>

        {/* Month and year display */}
        <View style={{ flex: 1 }}>
          <View style={{ alignSelf: "flex-start" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
              onPress={showDatePicker}
            >
              <Text
                style={{
                  fontSize: 26,
                  marginRight: 10,
                  alignSelf: "flex-start",
                  // fontFamily: "Helvetica Neue"
                  fontWeight: "bold"
                }}
              >
                {dayjs().month(props.month).format("MMM ")}
                {props.year.toString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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

        {/* total balance */}
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 17, color: "#7BBD00", marginRight: 10 }}>
            ${props.total.toLocaleString()}
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
          paddingBottom: 3,
          paddingRight: 30
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {props.vaults.map((vault, index) => (
          <Fragment key={vault.name}>
            <VaultTabButton
              index={index}
              name={vault.name}
              color={vault.color}
              selected={props.selectedVaults.includes(vault.name)}
              onPressed={() => {
                props.onToggleVault(vault.name);
              }}
            />
            {index === props.vaults.length - 1 && (
              <TouchableOpacity
                style={{
                  ...VaultTabButtonStyles.button,
                  backgroundColor: "black"
                }}
              >
                <Entypo name="plus" size={20} color="white" />
              </TouchableOpacity>
            )}
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  vaultButton: {
    paddingHorizontal: 15,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
    // borderWidth: 1,
    borderRadius: 7
  }
});
