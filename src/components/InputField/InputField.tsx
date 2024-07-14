import { FC, forwardRef, InputHTMLAttributes } from "react";
import { StyledLabel, StyledInputField, InputGroup } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ name, label, ...restProps }, ref) => {
    return (
      <InputGroup>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledInputField ref={ref} {...restProps} id={name} name={name} />
      </InputGroup>
    );
  }
);

export default InputField;
