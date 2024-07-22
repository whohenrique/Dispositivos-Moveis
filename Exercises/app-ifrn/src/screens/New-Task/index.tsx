import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, ContentForm } from "./styles";
import { theme } from "../../global/styles/theme";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/button";
import { TitleComponent } from "../../components/title";

export default function RegisterTask() {
  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.primary} />
      <TitleComponent name="Cadastro de tarefas" color={theme.colors.primary} />
      <ContentForm>
        <InputComponent placeholder="Título" form={true} />
        <InputComponent placeholder="Descrição" form={true} />
        <InputComponent placeholder="Categoria" form={true} />
        <InputComponent placeholder="Data" form={true} />
      </ContentForm>
      <ButtonComponent
        title="Cadastrar"
        color={theme.colors.primary}
        form={true}
      />
    </Container>
  );
}
