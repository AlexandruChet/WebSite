import { useState } from "react";
import "./New.scss";
import miniHouse from "../../assets/miniHouse.svg";
import blueHouse from "../../assets/BlueHouse.svg";

const NewHouseFind = () => {
  const [modalWindow, setModalWindow] = useState<boolean>(false);

  const toggleModal = () => {
    setModalWindow(!modalWindow);
  };

  return (
    <section className="find">
      <div
        className="find__header"
        style={{
          backgroundImage: `url(${blueHouse})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="find__title">The new way to find your new home</h1>
        <h3 className="find__subtitle">
          Find your dream place to live in with more than 10k+ properties
          listed.
        </h3>
        <button className="find__button" onClick={toggleModal}>
          {modalWindow ? "Close" : "Browse Properties"}
        </button>

        {modalWindow && (
          <div className="modal">
            <div className="modal__overlay" onClick={toggleModal}></div>
            <div className="modal__content">
              <h3 className="modal__title">You like our website?</h3>
              <textarea
                className="modal__textarea"
                placeholder="Your feedback..."
              ></textarea>
              <div className="modal__buttons">
                <button className="modal__button">😀</button>
                <button className="modal__button">😥</button>
              </div>
              <button className="modal__close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="find__features">
        <main className="features">
          <div className="features__card">
            <img className="features__icon" src={miniHouse} alt="Mini House" />
            <h3 className="features__title">Property Insurance</h3>
            <p className="features__text">
              We offer our customer property protection of liability coverage
              and insurance for their better life.
            </p>
          </div>
          <div className="features__card">
            <img className="features__icon" src={miniHouse} alt="Mini House" />
            <h3 className="features__title">Best Price</h3>
            <p className="features__text">
              Not sure what you should be charging for your property? No need to
              worry, let us do the numbers for you.
            </p>
          </div>
          <div className="features__card">
            <img className="features__icon" src={miniHouse} alt="Mini House" />
            <h3 className="features__title">Lowest Commission</h3>
            <p className="features__text">
              You no longer have to negotiate commissions and haggle with other
              agents — it only costs 2%!
            </p>
          </div>
          <div className="features__card">
            <img className="features__icon" src={miniHouse} alt="Mini House" />
            <h3 className="features__title">Overall Control</h3>
            <p className="features__text">
              Get a virtual tour, and schedule visits before you rent or buy any
              properties. You get overall control.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default NewHouseFind;
