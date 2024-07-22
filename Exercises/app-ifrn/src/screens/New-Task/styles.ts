import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.primary};
  font-weight: bold;
  line-height: 28px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContentForm = styled.View`
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;
