import { type JSX } from "react";
import "./Input.scss";

export type InputProps = {
  errorMessage?: string;
  error?: boolean;
} & JSX.IntrinsicElements["input"];

const Input = (props: InputProps) => {
  const { placeholder, errorMessage, error = false, type, ...rest } = props;

  return (
    <label className="input_container">
      <input
        type={type || "text"}
        autoComplete="off"
        data-error={error}
        className="input"
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="input_error">{errorMessage}</p>}
    </label>
  );
};

export default Input;
