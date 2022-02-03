import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PetPro from "./components/PetPro/PetPro";
import PetFood from "./components/PetFood/PetFood";
import PetForm from "./components/PetForm/PetForm";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <PetPro />
      <PetFood />
      <PetForm />
      <Footer />
    </>
  );
};

export default App;
