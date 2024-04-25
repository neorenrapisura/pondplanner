import { TouchableOpacity } from "react-native";
import React from "react";
import * as Haptics from "expo-haptics";

import { AntDesign } from "@expo/vector-icons";

interface Props {
  onPressAdd: () => void;
}

const FloatingAddButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 25,
        right: 25
      }}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        props.onPressAdd;
      }}
    >
      <AntDesign name="pluscircle" size={55} color="#7BBD00" />
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
