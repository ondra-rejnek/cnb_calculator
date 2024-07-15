import { FC } from "react";

interface Props {
  amount: string;
  resultValue: string;
}

const ResultDisplay: FC<Props> = ({ amount, resultValue }) => {
  return (
    <div>
      <p>{amount} CZK =</p>
      <h3 data-testid={"resultDisplay"}>{resultValue}</h3>
    </div>
  );
};

export default ResultDisplay;
