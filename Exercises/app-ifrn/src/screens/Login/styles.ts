import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fefefe;
  font-weight: bold;
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 70px;
  width: 120px;
  height: 160px;
`;

export const ContentCredencials = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 16px;
`;
