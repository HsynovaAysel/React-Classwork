import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams;
  const navigate = useNavigate();
  return (
    <div id="products-details">
      <div className="container">
        <div className="products-details">Products Details</div>
        <button onClick={() => navigate("/products")}>Back</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
