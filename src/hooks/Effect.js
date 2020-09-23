import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

export default props => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(() => {
        console.count("useEffect")
    }, [counter1, props.value])

    function handleCounter1() {
        setCounter1(prev => prev + 1)
    }

    function handleCounter2() {
        setCounter2(prev => prev + 1)
    }

    return (
        <div>
            Effect1: {props.value}
            <div>
                <Counter value={counter1} />
                <Button onClick={handleCounter1}>Counter 1</Button>
            </div>
            <div>
                <Counter value={counter2} />
                <Button onClick={handleCounter2}>Counter 2</Button>
            </div>
        </div>
    )
}
