import { CounterProvider } from "./src/hooks/useCounter";
import ContadorScreen from "./src/screens/ContadorScreen";
import CountScreen from "./src/screens/CountScrren";

export default function App() {
  return (
    <CounterProvider>
      <ContadorScreen />
      {/* <CountScreen /> */}
    </CounterProvider>
  );
}
