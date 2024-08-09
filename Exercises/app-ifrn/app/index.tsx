import { useRouter } from "expo-router";

import {
  Conatiner,
  Title,
  Logo,
  ContentWrapper,
  Input,
  Button,
  ButtonText,
} from "@/styles/theme";
import LogoIFRN from "@/assets/images/Logo-IF.png";

export default function App() {
  const router = useRouter();

  function handleLogin() {
    router.push("/new-task");
  }

  return (
    <Conatiner secondPage={false}>
      <Logo source={LogoIFRN} />
      <Title>Agenda IFRN</Title>
      <ContentWrapper>
        <Input placeholder="Usuário" isInputTask={false} />
        <Input placeholder="Senha" isInputTask={false} />
      </ContentWrapper>
      <Button isAdd={true} onPress={handleLogin}>
        <ButtonText isAdd={true}>Entrar</ButtonText>
      </Button>
    </Conatiner>
  );
}
