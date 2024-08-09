import { View, Text } from "react-native";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.system.tint,
        headerShown: false,
        tabBarStyle: {
          flexDirection: "column",
        },
      }}
    >
      <Tabs.Screen
        name="new-task"
        options={{
          title: "Registrar tarefa",
          tabBarActiveBackgroundColor: Colors.system.background,

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? "calendar-number-sharp" : "calendar-number-outline"
              }
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="task-list"
        options={{
          title: "Listar tarefas",
          tabBarActiveBackgroundColor: Colors.system.background,
          headerShown: true,
          headerTitle: "Agenda.IFRN",
          headerTitleStyle: {
            color: Colors.system.tint,
            fontSize: 24,
            fontWeight: "bold",
          },
          headerBackground: () => <View />,
          headerBackgroundContainerStyle: {
            backgroundColor: Colors.system.background,
            alignItems: "center",
            justifyContent: "space-between",
            height: 150,
            width: "100%",
            gap: 20,
            padding: 0,
          },

          headerRight: () => (
            <View
              style={{
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text
                style={{
                  width: "100%",
                  color: Colors.system.tint,
                  fontSize: 16,
                }}
              >
                Você tem 2
              </Text>
              <Text
                style={{
                  width: "100%",
                  color: Colors.system.tint,
                  fontSize: 16,
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                tarefas
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "list-sharp" : "list-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
