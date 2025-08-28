import "./House.scss";
import firstIcon from "../../assets/People.svg";
import houseIcon from "../../assets/HouseSvg.svg";
import houseImage from "../../assets/House.svg";
import { useState } from "react";

const House = () => {
  const [rent, setRent] = useState<boolean>(false);
  const [buy, setBuy] = useState<boolean>(false);
  const [sell, setSell] = useState<boolean>(false);

  const toggleRent = () => setRent((prev) => !prev);
  const toggleBuy = () => setBuy((prev) => !prev);
  const toggleSell = () => setSell((prev) => !prev);

  return (
    <div className="context">
      <main className="house container">
        <div className="house__content">
          <ul className="house__list">
            <li className="house__item house__item--intro">
              <h1 className="house__title">
                Buy, rent, or sell your property easily
              </h1>
              <h3 className="house__subtitle">
                A great platform to buy, sell, or even rent your properties
                without any commissions.
              </h3>
            </li>

            <li className="house__item house__item--actions">
              <div className="house__buttons">
                <button className="house__button" onClick={toggleRent}>
                  Rent
                </button>
                <button className="house__button" onClick={toggleBuy}>
                  Buy
                </button>
                <button className="house__button" onClick={toggleSell}>
                  Sell
                </button>
              </div>
              <div className="house__info">
                {rent && (
                  <h1 className="house__info-text">
                    You can rent a house for 1500 and for 1000 after 7 years
                  </h1>
                )}
                {buy && (
                  <h1 className="house__info-text">
                    You can buy a house for 500,000
                  </h1>
                )}
                {sell && (
                  <h1 className="house__info-text">
                    If you want to sell a house, I will help you for free.
                  </h1>
                )}
              </div>
            </li>

            <li className="house__item house__item--stats">
              <div className="house__stat">
                <img
                  src={firstIcon}
                  alt="PeopleIcon"
                  className="house__stat-icon"
                />
                <h3 className="house__stat-title">50k+ renters</h3>
                <p className="house__stat-text">believe in our service</p>
              </div>
              <div className="house__stat">
                <img
                  src={houseIcon}
                  alt="HouseIcon"
                  className="house__stat-icon"
                />
                <h3 className="house__stat-title">10k+ properties</h3>
                <p className="house__stat-text">
                  and house ready for occupancy
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="house__image-wrapper">
          <img src={houseImage} alt="Your House" className="house__image" />
        </div>
      </main>
    </div>
  );
};

export default House;
