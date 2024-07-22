import { TextInputProps } from "react-native";
import { ContainerInput } from "./styles";

interface InputProps extends TextInputProps {
  placeholder: string;
  form: boolean;
}

export function InputComponent({ placeholder, form }: InputProps) {
  return <ContainerInput placeholder={placeholder} form={form} />;
}

export default function Input({ ...rest }: Props) {
  return <StyledInput {...rest} />;
}
