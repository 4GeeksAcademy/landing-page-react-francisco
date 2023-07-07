import React from "react";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Jumbotron from "./Jumbotron.jsx";


//create your first component
const Home = () => {
  return (
    <div>
      <Header/>
      <Jumbotron /> 
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;