import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#615591",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "medium",
  },
});
