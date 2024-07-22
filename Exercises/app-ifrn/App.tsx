import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import Login from "./src/screens/Login";
import RegisterTask from "./src/screens/New-Task";
import { theme } from "./src/global/styles/theme";
import ListTasks from "./src/screens/List-Tasks";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {/* <Login /> */}
      {/* <RegisterTask /> */}
      <ListTasks />
    </ThemeProvider>
  );
}
