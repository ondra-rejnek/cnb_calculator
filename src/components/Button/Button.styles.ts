import styled from "styled-components";
import {
  BACKGROUND_LIGHT,
  BORDER_RADIUS,
  PRIMARY_COLOR,
} from "../../globalStyles";

export const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  height: 40px;
  padding: 10px 20px;
  font-size: 14px;
  color: ${BACKGROUND_LIGHT};
  background: ${PRIMARY_COLOR};
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: ${BORDER_RADIUS};
  &:hover {
    opacity: 0.8;
  }
`;
