import React from "react";
import { useReducer } from "react";
import Button from "../components/Button";

function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return init(action.payload);
        default:
            throw new Error();
    }
}

export default ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            Count: {state.count}
            <Button onClick={() => dispatch({ type: "reset", payload: initialCount })}>Reset</Button>
            <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
            <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
        </>
    );
};
