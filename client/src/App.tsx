import { useRef } from "react";
import { useScrollY } from "./services/helpers";
import BurgerMenu from "./Burger-menu/BurgerMenu";
import House from "./services/main/House";
import MyForm from "./Auth/Registration";
import Calculate from "./services/Percent/PercentTranslator";
import Fortune from "./services/Fortune/Fortune" 
import Footer from "./services/Footer/Footer";

const App = () => {
  const calculateRef = useRef<HTMLDivElement | null>(null);
  const houseRef = useRef<HTMLDivElement | null>(null);
  const registrationRef = useRef<HTMLDivElement | null>(null);
  const fortuneRef = useRef<HTMLDivElement | null>(null);

  const scrollY = useScrollY();

  const scrollToCalculate = () => {
    calculateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHouse = () => {
    houseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFortune = () => {
    fortuneRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BurgerMenu
        onNavigateCalculate={scrollToCalculate}
        onNavigateHouse={scrollToHouse}
        onRegistration={scrollToRegistration}
        onNavigateFortune={scrollToFortune}
      />

      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          zIndex: 2000,
        }}
      >
        Scroll Y: {scrollY}
      </div>

      <div ref={houseRef}>
        <House />
      </div>
      <div ref={registrationRef}>
        <MyForm />
      </div>
      <div ref={calculateRef}>
        <Calculate />
      </div>
      <div ref={fortuneRef}>
        <Fortune/>
      </div>
      <Footer />
    </>
  );
};

export default App;
