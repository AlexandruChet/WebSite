import { useRef } from "react";
import { useScrollY } from "./services/helpers";
import BurgerMenu from "./Burger-menu/BurgerMenu";
import House from "./services/main/House";
import MyForm from "./Auth/Registration";
import Calculate from "./services/Percent/PercentTranslator";
import Fortune from "./services/Fortune/Fortune";
import Slider from "./services/Slider/Slider";
import NewHouseFind from "./services/Find/NewHouse";
import Comment from "./services/Comments/Comment";
import Footer from "./services/Footer/Footer";
import CardsGenerations from "./Cards/CardGener";

const App = () => {
  type SlidesArray = {
    url: string;
    title?: string;
    description?: string;
  };

  const slides: SlidesArray[] = [
    {
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      title: "Reliable bank",
      description: "Your money is protected 24/7.",
    },
    {
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      title: "Online bank",
      description: "Manage your finances from any location.",
    },
    {
      url: "https://images.axios.com/Ibnzxmn3bM-c5NqKGUF03WBDBbo=/2024/03/02/1709401502826.jpg",
      title: "Credit solutions",
      description: "Profitable loans for business and family.",
    },
    {
      url: "https://t3.ftcdn.net/jpg/08/08/99/46/360_F_808994683_OUZEZt581lOYP0H2zGRXMZKJ5g87jkjx.jpg",
      title: "Investments",
      description: "Access to modern investment tools.",
    },
    {
      url: "https://www.dzbank.de/content/dam/dzbank/bilder/Homepage/Buehnen/desktopzuschnitt/240417_DZB_International_WebsiteHeader_StandorteNYC_Zitat.jpg/jcr%3Acontent/renditions/original.transform/resize1920/image.jpg",
      title: "Customer service",
      description: "Customer support at the highest level.",
    },
  ];

  const containerStyles = {
    width: "70vh",
    height: "280px",
    margin: "0 auto",
  };

  const calculateRef = useRef<HTMLDivElement | null>(null);
  const houseRef = useRef<HTMLDivElement | null>(null);
  const registrationRef = useRef<HTMLDivElement | null>(null);
  const fortuneRef = useRef<HTMLDivElement | null>(null);
  const commentsRef = useRef<HTMLDivElement | null>(null);

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

  const scrollToComments = () => {
    commentsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BurgerMenu
        onNavigateCalculate={scrollToCalculate}
        onNavigateHouse={scrollToHouse}
        onRegistration={scrollToRegistration}
        onNavigateFortune={scrollToFortune}
        onNavigateCom={scrollToComments}
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
      <div
        style={{ backgroundColor: "#333", minHeight: "100vh", padding: "20px" }}
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>Photos</h1>
        <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      </div>
      <div>
        <NewHouseFind />
      </div>
      <div ref={registrationRef}>
        <MyForm />
      </div>
      <div ref={calculateRef}>
        <Calculate />
      </div>
      <div ref={commentsRef}>
        <Comment/>
      </div>
      <div>
        <CardsGenerations/>
      </div>
      <div ref={fortuneRef}>
        <Fortune />
      </div>
      <Footer />
    </>
  );
};

export default App;
