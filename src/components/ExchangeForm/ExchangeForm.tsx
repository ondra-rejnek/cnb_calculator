import { FC, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FormFields } from "./types";
import { Button } from "../Button";
import InputField from "../InputField";
import { BtnWrapper, Container } from "./styles";
import SelectField from "../SelectField";
import ResultDisplay from "./ResultDisplay";
import { ExchangeRates } from "../../types/exchangeRate";
import { calculateAmountInCurrency } from "../../utils/calculateAmountInCurrency";
import { toast } from "react-toastify";

interface Props {
  exchangeRates: ExchangeRates;
}

const ExchangeForm: FC<Props> = ({ exchangeRates }) => {
  const [result, setResult] = useState<string>();
  const { register, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: { amountCzk: 1.0, code: undefined },
  });

  const onChange = () => {
    setResult(undefined);
  };

  const onSubmit = ({ amountCzk, code }: FormFields) => {
    const exchangeRate = exchangeRates[code];
    try {
      const calculationResult = calculateAmountInCurrency(
        amountCzk,
        exchangeRate
      );
      setResult(calculationResult);
    } catch (e) {
      if (e instanceof Error) {
        toast(e.message, { type: "error" });
      }
    }
  };

  const memoisedOptions = useMemo(
    () =>
      Object.entries(exchangeRates).map(([code, rate]) => ({
        label: `${code} | ${rate.currency}`,
        value: code,
      })),
    [exchangeRates]
  );
  const watchedAmount = watch("amountCzk");
  const watchedCurrency = watch("code");

  return (
    <form onChange={onChange} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputField
          label="Amount in CZK"
          required
          step="0.01"
          min="0"
          type="number"
          {...register("amountCzk")}
        />
        <SelectField
          options={memoisedOptions}
          label="Currency"
          {...register("code")}
        />
        <BtnWrapper>
          <Button type="submit">Convert</Button>
        </BtnWrapper>
      </Container>
      {result && (
        <ResultDisplay
          amount={watchedAmount.toString()}
          resultValue={`${result} ${watchedCurrency}`}
        />
      )}
    </form>
  );
};

export default ExchangeForm;
