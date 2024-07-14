import * as yup from "yup";

export const schema = yup.object().shape({
  code: yup.string().required("Select currency first"),
  amountCzk: yup.number().required("Amount must be filled"),
});
