import React from "react";
import { useReducer } from "react";
import Button from "../components/Button";

// o init é usado como valor default, mas o 1500 é carregado primeiro 
const init = () => {
    return 1
}

function reducer(state, action) {
    switch (action.type) {
        case 'DEVELOPER':
            return 5000 + action.payload
        case 'MANAGER':
            return 10000 + action.payload
        default:
            return;
    }
}

export default () => {
    const [salary, dispatch] = useReducer(reducer, 1500, init)

    function handleDeveloper() {
        dispatch({
            type: 'DEVELOPER',
            payload: 200
        })
    }

    function handleManager() {
        dispatch({
            type: 'MANAGER',
            payload: 2000
        })
    }

    return (
        <>
            <div>Reducer: R$ {salary}</div>
            <Button onClick={handleDeveloper}>Developer</Button>
            <Button onClick={handleManager}>Manager</Button>
        </>
    )
}
