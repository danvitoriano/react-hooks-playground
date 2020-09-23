import * as React from "react";
import { useState, useCallback } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

const list = [];

export default () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const handleClick = useCallback(() => {
    setValue((prev) => prev + step);
  }, [step]);

  function handleStep() {
    setStep((prev) => prev + 1);
  }

  list.push(handleClick);

  return (
    <>
      <Counter value={value} />
      <Button onClick={handleClick}>Count</Button>
      <Button onClick={handleStep}>Step {step}</Button>
      <div>Total Function: {list.length}</div>
    </>
  );
}
