import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import hexToRgba from "hex-to-rgba";
import * as Haptics from "expo-haptics";

interface Props {
  index: number;
  name: string;
  color: string;
  selected: boolean;
  onPressed: () => void;
}

const VaultTabButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: hexToRgba(props.color, props.selected ? 0.75 : 0),
        marginLeft: props.index === 0 ? 0 : styles.button.marginHorizontal,
        borderWidth: 1.5,
        borderColor: props.selected ? hexToRgba(props.color, 0) : props.color
      }}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        props.onPressed();
      }}
      onLongPress={() => null}
    >
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
    borderRadius: 7
  }
});

export default VaultTabButton;
