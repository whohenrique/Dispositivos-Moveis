import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({ title, color, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.containerButton, { backgroundColor: `${color}` }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
