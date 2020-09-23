import React from "react";
import { useEffect, useState, useDebugValue } from "react";
import Button from "../components/Button";

// custom hook
function useAge(year) {
    const [age, setAge] = useState(year);

    useDebugValue(age > 30 ? "velho" : "novo");
    useEffect(() => {
        console.log("idade alterada");
    }, [age]);

    function set(year) {
        setAge(new Date().getFullYear() - year);
    }
    return [age, set];
}

export default () => {
    const [age, setAge] = useAge(0);

    function handleAge() {
        setAge(1980);
    }

    return (
        <>
            <div>Idade: {age} anos</div>
            <Button onClick={handleAge}>Mudar Idade</Button>
        </>
    );
};
