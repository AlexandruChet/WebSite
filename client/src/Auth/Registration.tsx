import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "./Input";
import { config, initialState, type FormDataI } from "./config";
import './Registration.scss'

function MyForm() {
  const [formState, setFormState] = useState<FormDataI>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    console.log(data);
  };

  return (
    <section className="form">
          <form onSubmit={onSubmit} className="form__content">
      <p className="form-title">Registration</p>
      {config.map((item) => (
        <Input
          key={item.name}
          {...item}
          value={formState[item.name]}
          onChange={onChange}
          error={item.validate ? !item.validate(formState) : false}
        />
      ))}
      <button type="submit">Register</button>
    </form>
    </section>
  );
}

export default MyForm;
