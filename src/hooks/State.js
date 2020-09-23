import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

export default () => {
    const [value, setValue] = useState(0)
    function increaseCounter() {
        setValue((previous) => {
            return previous + 1
        })
    }
    function decreaseCounter() {
        setValue((previous) => {
            return previous - 1
        })
    }
    return <div>
        <Counter value={value} />
        <Button onClick={increaseCounter}>+</Button>
        <Button onClick={decreaseCounter}>-</Button>
    </div>
}
