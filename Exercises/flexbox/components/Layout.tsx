import React from "react";
import { View, StyleSheet } from "react-native";

interface LayoutProps {
  flexDirection: "flex" | "flex-col" | "grid";
  children: React.ReactNode;
}

export function Layout({ flexDirection = "flex", children }: LayoutProps) {
  const getLayoutStyle = () => {
    switch (flexDirection) {
      case "flex-col":
        return styles.flexColumn;
      case "grid":
        return styles.grid;
      default:
        return styles.flex;
    }
  };

  return <View style={[styles.container, getLayoutStyle()]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    backgroundColor: "#8cafcf",
  },
  content: {
    width: "80%",
    height: "30%",
    justifyContent: "space-between",
    padding: 40,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  grid: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 5,
    gap: 16,
    paddingHorizontal: 2,
  },
});
