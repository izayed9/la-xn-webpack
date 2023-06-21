const evenShildRecpe = {
  letherShiped: 2,
  ironShiped: 1,
  refineMonoston: 4,
};

const elvenCountletsRecipe = {
  ...evenShildRecpe,
  lether: 1,
  refineMonoston: 4,
};
console.log(evenShildRecpe);
console.log(elvenCountletsRecipe);
import React, { useState } from "react";

const Recepi = () => {
  const [recpe, setRecpe] = useState({});
  return (
    <div>
      <h2>Recpe</h2>
      <button onClick={() => setRecpe(evenShildRecpe)}>even shel Recepi</button>
      <button onClick={() => setRecpe(elvenCountletsRecipe)}>
        elvenCountletsRecipe
      </button>
      <ul>{Object.keys(recpe).map((item) => `<li>${item}</li>`)}</ul>
    </div>
  );
};

export default Recepi;
