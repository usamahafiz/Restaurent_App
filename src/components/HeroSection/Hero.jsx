import React from "react";
import Carousel from "react-bootstrap/Carousel"; 
import ExampleCarouselImage from "./ExampleCarouselImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";  
import Slide1 from "../../Images/Slide5.avif"; // Update image paths accordingly
import Slide2 from "../../Images/Slide3.avif";
import Slide3 from "../../Images/slide4.avif";
import Slide4 from "../../Images/slide2.avif";

const slides = [
  {
    src: Slide1,
    subtitle: "Delicious Meals Await!",
    label: "Order Your Favorite Dish",
    description: "Get 20% off your first order. Fast delivery to your doorstep!",
  },
  {
    src: Slide2,
    subtitle: "Fresh Ingredients Daily",
    label: "Healthy & Tasty Options",
    description: "Explore our menu and enjoy a delightful dining experience!",
  },
  {
    src: Slide3,
    subtitle: "Craving Something Special?",
    label: "Weekly Specials Just for You",
    description: "Check out our special deals on your favorite meals!",
  }, 
  {
    src: Slide4,
    subtitle: "Satisfy Your Hunger",
    label: "Order Now and Enjoy!",
    description: "Delicious food delivered hot and fresh to your door!",
  },
];

function Hero() {
  return (
    <Carousel className="carousels">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage imageSrc={slide.src} /> 
          <Carousel.Caption className="carousel-caption-center">
            <p id="des">{slide.subtitle}</p>
            <h3>{slide.label}</h3>
            <p>{slide.description}</p>
            <Link to="/menu"> {/* Change link destination if necessary */}
              <button className="btn btn-danger">
                Order Now<FaArrowRight style={{ paddingLeft: "5px" }} />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;







