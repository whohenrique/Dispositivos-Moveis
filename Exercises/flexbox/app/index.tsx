import { View, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Box, Box2 } from "@/components/Box";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button children="Menu" />
        <Button children="Logs" />
        <Button children="Credits" />
      </View>

      <View style={styles.containerLayout}>
        <Layout flexDirection="flex">
          <Box isLarge={false} />
          <Box isLarge={false} />
          <Box isLarge={false} />
        </Layout>

        <Layout flexDirection="flex-col">
          <Box isLarge={true} />
          <Box isLarge={true} />
          <Box isLarge={true} />
        </Layout>

        <Layout flexDirection="grid">
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
          <Box2 />
        </Layout>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#3e356d",
  },
  containerLayout: {
    width: "80%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#615591",
    padding: 20,
    gap: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#bcc8d4",
    paddingHorizontal: 20,
    marginTop: 40,
  },
});
