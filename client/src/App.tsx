
import BurgerMenu from "./Burger-menu/BurgerMenu";
import House from "./services/main/House"
import MyForm from "./Auth/Registration";
import Calculate from "./services/Percent/PercentTranslator";
import Footer from "./services/Footer/Footer";

const App = () => {

  return (
    <>
      <BurgerMenu />
      <House/>
      <MyForm />
      <Calculate />
      <Footer />
    </>
  );
};

export default App;
