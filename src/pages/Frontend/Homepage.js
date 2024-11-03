import React, { useState } from "react"; 
import "../../scss/_home.scss"; // Make sure to import the SCSS file for styling  
import Hero from "../../components/HeroSection/Hero"; 
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import CardImageSlider from "../../components/ImageSlider/ImageSlider";
import ChooseUs from "../../components/ChooseUs/ChooseUs";

function Home() {
  return (
    <main className="home-page">
      <Hero />
    <PopularProducts />
      <ChooseUs/>
      <CardImageSlider />
    </main>
  );
}

export default Home;
