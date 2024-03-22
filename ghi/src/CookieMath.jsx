import { useState } from "react";

export default function CookieMath() {
  const [butter, setButter] = useState("");
  return (
    <>
      <label>
        Browned Butter: &ensp;
        <input value={butter} onChange={(e) => setButter(e.target.value)} /> g
      </label>
      <p>{Math.round(butter * 0.4444)}g Sugar</p>
      <p>{Math.round(butter * 1.083333)}g Brown Sugar</p>
      <p>{Math.round(butter * 0.011111)}tsp Vanilla</p>
      <p>{Math.round(butter * 0.00416666)} Eggs</p>
      <p>{Math.round(butter * 1.222222)}g Bread Flour</p>
      <p>{Math.round(butter * 0.444444)}g All Purpose Flour</p>
      <p>{Math.round(butter * 0.00416666)}tsp Baking Soda</p>
      <p>{Math.round(butter * 0.0027777)}tbs Salt</p>
      <p>{Math.round(butter * 0.0111111)}cups Chocolate Chips</p>
    </>
  );
}
