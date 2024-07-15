import { FC, forwardRef, SelectHTMLAttributes } from "react";
import { InputGroup, StyledLabel } from "../InputField/styles";
import { StyledSelectField } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  label: string;
}

const SelectField: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ name, label, options, ...restProps }, ref) => {
    return (
      <InputGroup>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledSelectField
          data-testid={name}
          ref={ref}
          {...restProps}
          id={name}
          name={name}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelectField>
      </InputGroup>
    );
  }
);

export default SelectField;
