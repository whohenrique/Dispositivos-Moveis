import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
