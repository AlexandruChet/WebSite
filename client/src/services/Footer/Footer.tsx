import { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [state, setState] = useState(false);

  const funcChange = () => {
    setState(!state);
  };

  return (
    <footer className="bottom__web container">
      <div className="questions">
        <ul>
          <li>
            <h3>Have a question?</h3>
          </li>
          <li>
            <h3>Have a proposal for cooperation?</h3>
          </li>
          <li>
            <h3>Advertising questions?</h3>
          </li>
        </ul>
        <button onClick={funcChange}>show more</button>
      </div>
      {state && (
        <div className="info">
          <ul>
            <li>
              <h3>Have a question?</h3>
            </li>
            <li>
              <h3>Have a proposal for cooperation?</h3>
            </li>
            <li>
              <h3>Advertising questions?</h3>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
