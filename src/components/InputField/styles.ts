import styled from "styled-components";
import { BORDER_BASIC, BORDER_RADIUS, PRIMARY_COLOR } from "../../globalStyles";

export const StyledInputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: ${BORDER_BASIC};
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  &:focus {
    border-color: ${PRIMARY_COLOR};
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  text-align: start;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
