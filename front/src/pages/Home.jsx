import React from "react";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import HeroImage from "../components/layout/HeroImage/HeroImage";
import Categories from "../components/layout/Categories/Categories";
import "./Home.scss";
import Products from "../components/layout/Product/Products";
const Home = () => {
  return (
    <div className="home">
      <Header activeHeading={1} />
      <HeroImage />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
