import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface ButtonGroupProps {
  title: string;
  width: number;
  height: number;
  color: string;
}

export function Button({ title, width, height, color }: ButtonGroupProps) {
  return (
    <TouchableOpacity
      style={[
        { width: width, height: height, backgroundColor: color },
        styles.container,
      ]}
    >
      <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
}
