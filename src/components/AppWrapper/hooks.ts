import { useQuery } from "@tanstack/react-query";
import { fetchReadableStream } from "../../utils/readableStream";
import { parseExchangeRatesData } from "../../utils/parseExchangeRates";

const CNB_DATA_URL =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const useFetchCNBExchangeRates = () =>
  useQuery({
    queryKey: ["cnb-data"],
    queryFn: async () => {
      const parsedResponse = await fetchReadableStream(CNB_DATA_URL);
      const parsedData = parseExchangeRatesData(parsedResponse);
      return parsedData;
    },
  });
