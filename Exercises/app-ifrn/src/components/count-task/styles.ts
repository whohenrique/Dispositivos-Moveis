import styled from "styled-components/native";

export const Count = styled.Text<{ count: boolean }>`
  font-size: 16px;
  color: #fff;

  ${({ count }) => count && `font-weight: bold;`};
`;
