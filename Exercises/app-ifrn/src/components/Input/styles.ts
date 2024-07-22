import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const ContainerInput = styled.TextInput<{ form: boolean }>`
  background-color: ${theme.colors.background};
  width: 254px;
  height: 54px;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 600;

  ${({ form }) =>
    form &&
    `background-color: transparent; border: 2px solid ${theme.colors.gray2}; border-radius: 0px; width: 100%;`}
`;
