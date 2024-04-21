import { View, Text } from "react-native";
import React from "react";
import getMonth from "../../utils/getMonth";

const analytics = () => {
  return (
    <View>
      <Text>{getMonth()}</Text>
    </View>
  );
};

export default analytics;
