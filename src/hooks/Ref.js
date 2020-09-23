import React from "react";
import { useRef, useState } from "react";
import Button from "../components/Button";

export default () => {
    const [value, setValue] = useState('UOL')

    function handleChange() {
        setValue(inputRef.current.value)
        inputRef.current.focus()
    }

    const inputRef = useRef()

    return (
        <>
            <div>
                Valor alterado = {value}
                <input type="text" ref={inputRef} />
                <Button onClick={handleChange}>Trocar</Button>
            </div>
        </>
    )
}
