import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { Avatar } from "./src/components/Avatar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Atividade de componentização</Text>
      </View>
      <View style={styles.content}>
        <Avatar name="Jefferson Queiroga" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerHeader: {
    marginTop: "20%",
  },
  content: {
    flex: 1,
    width: "95%",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
