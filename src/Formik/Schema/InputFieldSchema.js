import * as yup from "yup";

const FormSchema = yup.object().shape({
  mcq: yup.string().required("Select MCQ"),

  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  option: yup.string().required("Select one option"),
  multi: yup.array().of(
    yup.object().shape({
      multiChoices: yup.string().required("OKOKOKKKOKKKOKOK"),
    })
  ),
});
export default FormSchema;
