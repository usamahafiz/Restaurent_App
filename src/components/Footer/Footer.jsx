import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        className="footer text-center text-lg-start text-dark" // Adjusted padding-top
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <section>
          <div className="container text-center text-md-start pt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h2>
                  Bite Heaven
                </h2>
                {/* <img
                  src="https://themewagon.github.io/kaira/images/main-logo.png"
                  alt="Logo"
                /> */}
                <p className="mt-4">
                  Be the first to try our exclusive dishes, crafted for sharing and savoring together.
                </p>
                <div className="text-start social-icon">
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="social-icon" />
                  </Link>
                  <Link
                    to="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="social-icon" />
                  </Link>
                  <Link
                    to="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="social-icon" />
                  </Link>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Categories</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="#" className="text-dark">
                    Desi Food
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Junk Food
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Chineese
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Deserts
                  </Link>
                </p>
                <p></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="/buyer-dashboard" className="text-dark">
                    Menu Items
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-dark">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-dark">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link to="/seller-dashboard" className="text-dark">
                    Manager Dasboard
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="tel:3075501821">+305 556 5781</Link>
                </p>
                <p className="mt-2">283 N. Glenwood Street, Canal Road, Faisalabad</p>
                <p>
                  <Link to="mailto:hafizmuhammadusama664@gmail.com">
                    hafizmuhammadusama664@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="row text-center p-3 foot2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
         <div className="col-md-6 ">  Copyright © {year}. All Rights Reserved.</div>
         <div className="col-md-6 img">
          <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/Group-2.png" alt="" />
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
