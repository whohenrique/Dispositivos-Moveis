import { View, Text } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";
import { useCounter } from "../../hooks/useCounter";

export function Counter() {
  const { count, decrement, increment } = useCounter();
  return (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <Text style={styles.containerCounter}>{count}</Text>
        <Button
          title="Incrementar"
          color="black"
          onPress={() => {
            increment();
          }}
        ></Button>
        <Button
          title="Decrementar"
          color="red"
          onPress={() => {
            decrement();
          }}
        />
      </View>
    </View>
  );
}
