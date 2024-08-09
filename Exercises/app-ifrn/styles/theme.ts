import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";

export const theme = {};

export const Conatiner = styled.View<{ secondPage: boolean }>`
  flex: 1;
  align-items: center;
  background-color: ${Colors.system.background};

  ${({ secondPage }) =>
    secondPage &&
    `
    background-color: ${Colors.system.tint};
    justify-content: center;
  `}
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 70px;
  width: 120px;
  height: 160px;
`;

export const ContentWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 100%;
  gap: 16px;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: ${Colors.system.tint};
`;

export const Subtitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${Colors.system.background};
`;

export const Input = styled.TextInput<{ isInputTask: boolean }>`
  width: 80%;
  height: 58px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${Colors.system.tint};
  font-weight: 700;

  ${({ isInputTask }) =>
    isInputTask &&
    `
    background-color: transparent;
    border: 1px solid ${Colors.system.gray};
  `}
`;

export const Button = styled.TouchableOpacity<{ isAdd: boolean }>`
  width: 80%;
  height: 58px;

  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  ${({ isAdd }) =>
    !isAdd
      ? `
    background-color: ${Colors.system.background};
    margin-top: 36px;
  `
      : `
    background-color: ${Colors.system.gray};`}
`;

export const ButtonText = styled.Text<{ isAdd: boolean }>`
  font-size: 18px;
  color: ${Colors.system.tint};

  ${({ isAdd }) =>
    isAdd &&
    `
    font-weight: bold;
  `}
`;
