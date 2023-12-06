import "./styles/index.css";
import "./styles/features.css";
import { NavBar } from "./components/navigation/NavBar";
import { CustomBanner } from "./components/banners/CustomBanner";
import { CustomNewsSections } from "./components/sections/CustomNewsSections";
import { Footer } from "./components/navigation/Footer";
import { useState } from "react";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      <NavBar onClick={onClickLogin} />
      <CustomBanner />
      <CustomNewsSections isLoginUser={isLogged} />
      <Footer />
    </>
  );
};

export default App;
