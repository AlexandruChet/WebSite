import BurgerMenu from "./Burger-menu/BurgerMenu";
import MyForm from "./Auth/Registration";
import Calculate from "./services/Percent/PercentTranslator";
import Footer from "./services/Footer/Footer"

const App = () => {
  return (
    <>
      <BurgerMenu />
      <MyForm />
      <Calculate/>
      <Footer/>
    </>
  );
};

export default App;
