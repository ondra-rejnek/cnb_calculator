import ExchangeForm from "../ExchangeForm";
import ExchangeRatesTable from "../ExchangeRatesTable";
import { Paper, StyledH2, Wrapper } from "./styles";
import { useFetchCNBExchangeRates } from "./hooks";

const AppWrapper = () => {
  const { data, isLoading, isFetching } = useFetchCNBExchangeRates();

  if (isLoading || isFetching) {
    return <p>Fetching data...</p>;
  }

  if (!data) {
    return <p>Error fetching data</p>;
  }

  return (
    <Wrapper>
      <StyledH2>Currency Converter</StyledH2>
      <Paper>
        <ExchangeForm exchangeRates={data} />
      </Paper>
      <StyledH2>Current exchange rates</StyledH2>
      <Paper>
        <ExchangeRatesTable exchangeRates={data} />
      </Paper>
    </Wrapper>
  );
};

export default AppWrapper;
