import React from "react";
import Cart from "../Components/Cart";
import Card from "../Components/Card";

export default (Home) => {
  return (
    <div className="container">
      <div className="row">
        <Card />
        <Cart />
      </div>
    </div>
  );
};
