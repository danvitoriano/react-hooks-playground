import React from "react";
import { useRef, useLayoutEffect } from "react";
import Button from "../components/Button";

export default () => {
    const divRef = useRef()
    useLayoutEffect(() => {
        divRef.current.innerHTML = "<div style='margin-top: 60px; background:red; color:white'>Conteudo</div>"
    }, [])

    function handleChange() {
        divRef.current.innerHTML = "<div style='margin-top: 60px; background:green; color:white'>Alterado</div>"
    }

    return (
        <div>
            <div ref={divRef}>Conteudo</div>
            <Button onClick={handleChange}>Mudar</Button>
        </div>
    )
}
