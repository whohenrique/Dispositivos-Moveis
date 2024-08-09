import {
  Conatiner,
  Subtitle,
  ContentWrapper,
  Input,
  Button,
  ButtonText,
} from "@/styles/theme";

export default function HomeScreen() {
  return (
    <Conatiner secondPage={true}>
      <Subtitle>Cadastro de tarefas</Subtitle>
      <ContentWrapper>
        <Input isInputTask={true} placeholder="Titulo" />
        <Input isInputTask={true} placeholder="Descrição" />
        <Input isInputTask={true} placeholder="Categoria" />
        <Input isInputTask={true} placeholder="Data" />
        <Button isAdd={false}>
          <ButtonText isAdd>Adicionar</ButtonText>
        </Button>
      </ContentWrapper>
    </Conatiner>
  );
}
