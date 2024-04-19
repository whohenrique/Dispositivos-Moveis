import { View, Text } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

import { useCounter } from "./useCounter";

export function Counter() {
  const { count, increment, decrement } = useCounter({ value: 0 });
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
