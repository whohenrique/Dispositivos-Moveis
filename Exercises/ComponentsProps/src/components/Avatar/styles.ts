import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  titleContainer: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "700",
  },
});
