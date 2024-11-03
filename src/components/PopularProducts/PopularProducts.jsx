import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const PopularProducts = ({addToCart}) => {  
  const [popularProducts, setPopularProducts] = useState([]);
  return (
    <main className="text-center mb-5">
      <h1 className="text-dark mb-5 mt-5">Featured Product</h1>
      <div className="container">

      <div className="row text-center mt-3">
        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Logo"
            style={{ height: "170px" }}
          />
          <h5 className="text-dark mt-3">Desi Food</h5>
        

        </div>

        <div className="col-lg-3 mt-2 mb-3 mt-2 mb-3">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Logo"
            style={{ height: "170px" }}
          />
          <h5 className="text-dark mt-3">Salad</h5>
         
        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Logo"
            style={{ height: "170px" }}
          />
          <h5 className="text-dark mt-2">Chineese</h5>

        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Logo"
            style={{ height: "170px" }}
          />
          <h5 className="text-dark mt-2">Desert</h5>

        </div>
      </div>

      </div>

      <div className="productCard">
       
        
      </div>
      <div className="button">
        <Link to="#">
        <button className="btn btn-danger btn1">View More</button>
        </Link>
      </div>
    </main>
  );
};

export default PopularProducts;
