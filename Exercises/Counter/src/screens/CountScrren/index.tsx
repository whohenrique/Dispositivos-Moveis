import { SafeAreaView, StyleSheet, View } from "react-native";
import { Title } from "../../components/Title";
import { useCounter } from "../../hooks/useCounter";

export default function CountScreen() {
  const { count } = useCounter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Title title={`${count}`} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: 100,
    alignItems: "center",
  },
});
