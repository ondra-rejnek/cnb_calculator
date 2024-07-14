import styled from "styled-components";
import { BACKGROUND_LIGHT } from "../../globalStyles";

export const Paper = styled.section`
  background-color: ${BACKGROUND_LIGHT};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 40px;
`;

export const StyledH2 = styled.h2`
  color: ${BACKGROUND_LIGHT};
  text-align: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  margin-right: 16px;
  margin-left: 16px;
`;
