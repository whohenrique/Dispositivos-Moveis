import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 15,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: "hidden",
  },
  textContainer: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
  },
  buttonContainer: {
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    opacity: 0.8,
    borderRadius: 4,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
