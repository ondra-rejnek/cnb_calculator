import { FC } from "react";

interface Props {
  amount: string;
  resultValue: string;
}

const ResultDisplay: FC<Props> = ({ amount, resultValue }) => {
  return (
    <>
      <p>{amount} CZK =</p>
      <h3>{resultValue}</h3>
    </>
  );
};

export default ResultDisplay;
