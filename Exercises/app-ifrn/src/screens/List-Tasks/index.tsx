import { StatusBar } from "expo-status-bar";
import { TitleComponent } from "../../components/title";
import { theme } from "../../global/styles/theme";
import { Container, Content } from "./styles";

export default function ListTasks() {
  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Content>
        <TitleComponent name="Agenda.IFRN" color={theme.colors.white} />
        
      </Content>
    </Container>
  );
}
