import { useState, useCallback } from "react";
import "./Percent.scss";

const defaultRates: { [key: number]: number } = {
  1: 0.1,
  2: 0.2,
  3: 0.3,
  4: 0.4,
  5: 0.5,
  6: 0.6,
  7: 0.7,
  8: 0.8,
  9: 0.9,
  10: 1.0,
  11: 1.1,
  12: 1.2,
  13: 1.3,
  14: 1.4,
  15: 1.5,
  16: 1.6,
  17: 1.7,
  18: 1.8,
  19: 1.9,
  20: 2.0,
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
