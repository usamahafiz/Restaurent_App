// SellerDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "./addProduct";
import ManageProducts from "./ManageProduct";
import Orders from "./Orders";
import Earnings from "./Earning";

const SellerDashboard = () => {
  const [activeSection ] = useState("addProduct");
  const navigate = useNavigate();


  return (
    <div>   
      {activeSection === "addProduct" && <AddProduct />}
      {activeSection === "manageProducts" && <ManageProducts />}
      {activeSection === "orders" && <Orders />}
      {activeSection === "earnings" && <Earnings />}
    </div>
  );
};

export default SellerDashboard;