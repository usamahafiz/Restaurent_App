import React from "react";
import { Breadcrumb } from "react-bootstrap";  
import { Link } from "react-router-dom";  

const Hero = () => {
  return (
    <div className="sectionStyles">
      <h4
        style={{
          fontFamily: "Playfair-Display",
          fontSize: "50px",
        }}
      >
        About our Services
      </h4>

      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={{ textDecoration: "none", color: "white" }}>About Us</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Hero;
