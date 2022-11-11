import React from "react";

const counter = () => {
  return (
    <h2>
      Browse{" "}
      <span class="themecolor">
        <span class="counter-inline animate-math">
          <span class="number" data-to="60000" className="counter" style={{color: "#484ef8"}} >
            60000
          </span>
        </span>
        +
      </span>{" "}
      products
    </h2>
  );
};

export default counter;
