import React from "react";
import { useRef, useState } from "react";
import Button from "../components/Button";

export default () => {
    const [value, setValue] = useState('Hello World')

    function handleChange() {
        setValue(inputRef.current.value)
        inputRef.current.focus()
    }

    const inputRef = useRef()

    return (
        <>
            <div className="form-group">
                Valor alterado: {value}
                <input type="text" ref={inputRef} className="form-control" aria-describedby="refInput" />
                <Button onClick={handleChange}>Trocar</Button>
            </div>
        </>
    )
}
