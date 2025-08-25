import { useState, useCallback } from "react";
import "./Percent.scss";

const defaultRates: { [key: number]: number } = {
  1: 12.5,
  2: 13.0,
  3: 13.5,
  4: 14.0,
  5: 14.5,
  6: 15.0,
  7: 15.5,
  8: 16.0,
  9: 16.5,
  10: 17.0,
  11: 17.2,
  12: 17.5,
  13: 18.0,
  14: 18.5,
  15: 19.0,
  16: 19.5,
  17: 20.0,
  18: 20.5,
  19: 21.0,
  20: 21.5,
};

const Calculate = () => {
  const [value, setValue] = useState<number | undefined>();
  const [years, setYears] = useState<number | undefined>();
  const [result, setResult] = useState<number | undefined>();

  const processing = useCallback(() => {
    if (value == null || value <= 0) {
      alert("Please enter a valid credit amount greater than 0");
      return;
    }

    if (years == null || years < 1 || years > 20) {
      alert("Term must be between 1 and 20 years");
      return;
    }

    const rate = defaultRates[years];
    if (rate == null) {
      alert("Rate not found for this term");
      return;
    }

    setResult(Number(value + value * rate));
  }, [value, years]);

  return (
    <div className="main__content">
      <div>
        <article>
          <h3>Credit Amount</h3>
          <input
            type="number"
            value={value ?? ""}
            onChange={(e) =>
              setValue(e.target.value ? Number(e.target.value) : undefined)
            }
          />
          <h3>Term (years 1-20)</h3>
          <input
            type="number"
            value={years ?? ""}
            onChange={(e) =>
              setYears(e.target.value ? Number(e.target.value) : undefined)
            }
          />
          <div>
            <button onClick={processing}>Calculate</button>
            <h3>Result (interest)</h3>
            <input value={result ?? ""} readOnly />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Calculate;
