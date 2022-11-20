import React from "react";

const StoreChild = ({ handleGrapFruit }) => {
  return (
    <div>
      <button onClick={() => handleGrapFruit("apple")}>Grap fruit</button>
    </div>
  );
};

export default StoreChild;
