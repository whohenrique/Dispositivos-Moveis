import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { Avatar } from "./src/components/Avatar";
import { ItemList } from "./src/components/Item-List";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          height: "95%",
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Atividade de componentização</Text>
        </View>
        <View style={styles.content}>
          <Avatar name="Paul Allen" />
        </View>

        <View style={styles.listItemsContent}>
          <ItemList name="Jhon Smith" value={"-123"} />
          <ItemList name="Jhon Smith" value={123} />
          <ItemList name="Jhon Smith" value={"-123"} />
          <ItemList name="Jhon Smith" value={123} />
          <ItemList name="Jhon Smith" value={"-123"} />
          <ItemList name="Jhon Smith" value={123} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#bcc8d4",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHeader: {
    marginTop: 30,
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
  listItemsContent: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
});
