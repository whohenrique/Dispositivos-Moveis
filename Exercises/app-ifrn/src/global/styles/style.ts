import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Title = styled.Text<{ color: string }>`
  font-size: 28px;
  color: ${({ color }) => color};
  font-weight: bold;
`;
