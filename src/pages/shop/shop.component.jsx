import "./shop.styles.css";
import React from "react";
import Cards from "../../components/cards/cards.component";

const Shop = ({ products }) => {
  return (
    <div className="shop">
      {products ? (
        <Cards products={products} />
      ) : (
        <p className="loading">Loading Products...</p>
      )}
    </div>
  );
};

export default Shop;
