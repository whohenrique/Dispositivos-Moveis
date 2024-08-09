import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TaskProps {
  title?: string;
  isChecked: boolean;
}

export function Task({ title, isChecked }: TaskProps) {
  return (
    <Container isChecked={isChecked}>
      <Content>
        {isChecked ? (
          <Ionicons
            name="checkmark-circle-sharp"
            size={24}
            color={Colors.system.background}
          />
        ) : (
          <Ionicons
            name="ellipse-outline"
            size={24}
            color={Colors.system.gray2}
          />
        )}
        <TaskText isChecked={isChecked}>{title}</TaskText>
      </Content>
      <Ionicons name="trash-sharp" size={24} color={Colors.system.gray2} />
    </Container>
  );
}

const Container = styled.View<TaskProps>`
  width: 95%;
  height: 54px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-inline: 30px;

  ${({ isChecked }) =>
    isChecked
      ? `
    background-color: ${Colors.system.tint};
    `
      : `
    background-color: "#666666";`}
`;

const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

const TaskText = styled.Text<TaskProps>`
  font-size: 16px;
  font-weight: bold;

  ${({ isChecked }) =>
    isChecked
      ? `
    text-decoration: line-through;
    color: ${Colors.system.background};
    `
      : `
    text-decoration: none;`}
`;
