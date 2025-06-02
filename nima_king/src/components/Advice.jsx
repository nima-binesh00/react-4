import React from "react";
import { useState, useEffect } from "react";

export default function Advice() {
  const [Advice, setAdvice] = useState();
  async function name() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <>
        <button onClick={name}>click for Advice 🧙</button>
        <h1>{Advice}</h1>
      </>
    </div>
  );
}
