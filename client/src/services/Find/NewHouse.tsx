import { useState, useEffect } from "react";
import "./New.scss";
import miniHouse from "../../assets/miniHouse.svg";
import blueHouse from "../../assets/BlueHouse.svg";

const NewHouseFind = () => {
  const [modalWindow, setModalWindow] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>("");

  const toggleModal = () => setModalWindow((prev) => !prev);

  const addSmile = (smile: string) => setTextValue((prev) => prev + smile);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalWindow(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const features = [
    {
      icon: miniHouse,
      title: "Property Insurance",
      text: "We offer our customer property protection of liability coverage and insurance for their better life.",
    },
    {
      icon: miniHouse,
      title: "Best Price",
      text: "Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.",
    },
    {
      icon: miniHouse,
      title: "Lowest Commission",
      text: "You no longer have to negotiate commissions and haggle with other agents — it only costs 2%!",
    },
    {
      icon: miniHouse,
      title: "Overall Control",
      text: "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
    },
  ];

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
          Find your dream place to live in with more than 10k+ properties listed.
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
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="modal__textarea"
                placeholder="Your feedback..."
              />
              <div className="modal__buttons">
                <button
                  className="modal__button"
                  onClick={() => addSmile("😀")}
                >
                  😀
                </button>
                <button
                  className="modal__button"
                  onClick={() => addSmile("😥")}
                >
                  😥
                </button>
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
          {features.map((mainElement, index) => (
            <div className="features__card" key={index}>
              <img className="features__icon" src={mainElement.icon} alt={mainElement.title} />
              <h3 className="features__title">{mainElement.title}</h3>
              <p className="features__text">{mainElement.text}</p>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default NewHouseFind;