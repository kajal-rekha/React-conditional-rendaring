import React from "react";

const Developer = () => {
  const isDeveloper = true;

  return (
    <div>
      {/* {isDeveloper ? (
        <h1>He is a web developer</h1>
      ) : (
        <h1>He ia grapic designner</h1>
      )} */}
      {/* <h1>
        {isDeveloper ? "He is a web developer" : "He is not a web developer"}
      </h1> */}

      <h1>He is {isDeveloper ? "" : "not"} a developer</h1>
    </div>
  );
};

export default Developer;
