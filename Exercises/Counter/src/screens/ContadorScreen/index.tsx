import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Title } from "../../components/Title";
import { Counter } from "../../components/Counter";

export default function ContadorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Title title="Contador de pessoas" />
        <Counter />
      </View>
      <StatusBar style="auto" />
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
