import React from "react";
import { Container, Title, Logo, ContentCredencials } from "./styles";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/button";
import ifrn from "../../assets/ifrn.png";
import { theme } from "../../global/styles/theme";
import { TitleComponent } from "../../components/title";

export default function Home() {
  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>

      <ContentCredencials>
        <InputComponent placeholder="Login" form={false} />
        <InputComponent placeholder="Senha" form={false} />
        <ButtonComponent
          title="Entrar"
          color={theme.colors.gray}
          form={false}
        />
      </ContentCredencials>
    </Container>
  );
}
