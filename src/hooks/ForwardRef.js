import React from "react";
import { useRef } from "react";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

export default () => {
    const inputRef = useRef();

    function handleClick() {
        inputRef.current.focus()
    }

    return (
        <>
            <div>
                <InputGroup ref={inputRef} />
                <Button onClick={handleClick}>Focus Email</Button>
            </div>
        </>
    )
}
