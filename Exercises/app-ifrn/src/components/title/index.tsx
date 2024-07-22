import { Title } from "../../global/styles/style";

export function TitleComponent({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return <Title color={color}>{name}</Title>;
}
