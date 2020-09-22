import * as React from "react";
import { useState, useCallback } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

const functions = new Set();

export default function App() {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const handleClick = useCallback(() => {
    setValue((prev) => prev + step);
  }, [step]);

  function handleStep() {
    setStep((prev) => prev + 1);
  }

  functions.add(handleClick);

  return (
    <>
      <Counter value={value} />
      <Button onClick={handleClick}>Contar</Button>
      <Button onClick={handleStep}>Passo {step}</Button>
      <div>Total Function = {functions.size}</div>
    </>
  );
}
