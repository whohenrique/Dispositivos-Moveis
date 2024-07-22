import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  background-color: #f5f5f5;
  margin-top: 20px;
`;

export const Content = styled.View`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 10px;
`;
