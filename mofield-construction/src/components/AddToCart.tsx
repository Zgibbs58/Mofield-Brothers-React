"use client"; //use in client bundle only

import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("Click")}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
