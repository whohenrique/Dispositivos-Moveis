import React from "react";
import { View, StyleSheet } from "react-native";

interface BoxProps {
  isLarge: boolean;
}

export function Box({ isLarge }: BoxProps) {
  return (
    <View style={[styles.container, isLarge ? styles.large : styles.small]} />
  );
}

export function Box2() {
  return <View style={[styles.container]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 50,
    height: 50,
  },
  large: {
    width: "100%",
    height: "30%",
  },
  small: {
    width: "30%",
    height: "90%",
  },
});
