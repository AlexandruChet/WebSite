import type { InputProps } from "./Input";

export type FormDataI = {
  name: string;
  password: string;
  duplicate: string;
  email: string;
  surname: string;
};

type Config = (InputProps & {
  validate?: (state: FormDataI) => boolean;
  name: keyof FormDataI;
})[];

export const config: Config = [
  {
    name: "name",
    placeholder: "Name",
    required: true,
  },
  {
    name: "surname",
    placeholder: "Surname",
    required: true,
  },
  {
    name: "email",
    placeholder: "E-Mail",
    pattern: "^\\S+@\\S+\\.\\S+$",
    errorMessage: "Incorrect email",
    required: true,
  },
  {
    name: "password",
    placeholder: "Password",
    required: true,
    type: "password",
    minLength: 6,
    errorMessage: "Passwords don't match",
    validate: (state: FormDataI) => state.password === state.duplicate,
  },
  {
    name: "duplicate",
    placeholder: "Repeat password",
    required: true,
    type: "password",
  },
];

export const initialState: FormDataI = {
  name: "",
  password: "",
  duplicate: "",
  email: "",
  surname: "",
};
