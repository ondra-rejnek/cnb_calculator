import { FC } from "react";
import { Table, TableCell, TableHeader, TableRow } from "./styles";
import { ExchangeRates } from "../../types/exchangeRate";

interface Props {
  exchangeRates: ExchangeRates;
}

const ExchangeRatesTable: FC<Props> = ({ exchangeRates }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Currency</TableHeader>
          <TableHeader>Country</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Rate</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.entries(exchangeRates).map(([code, rate], index) => (
          <TableRow key={`${code}-${index}`}>
            <TableCell width={"30%"}>
              {code} | {rate.currency}
            </TableCell>
            <TableCell width={"25%"}>{rate.country}</TableCell>
            <TableCell width={"20%"}>{rate.amount}</TableCell>
            <TableCell width={"20%"}>{rate.rate}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ExchangeRatesTable;
