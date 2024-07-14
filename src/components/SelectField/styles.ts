import styled from "styled-components";
import { BORDER_RADIUS, PRIMARY_COLOR } from "../../globalStyles";

export const StyledSelectField = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e2e8f0;
  border-radius: ${BORDER_RADIUS};
  min-width: 180px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  appearance: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: 100%;
  background-repeat: no-repeat;
  &:focus {
    border-color: ${PRIMARY_COLOR};
    outline: none;
  }
`;
