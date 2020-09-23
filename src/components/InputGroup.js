import React from "react";
import { forwardRef } from 'react'

const InputGroup = forwardRef((props, ref) => {
    return (
        <>
            <div key="a">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="txtName" />
            </div>
            <div key="b">
                <label htmlFor="name">Email: </label>
                <input type="email" ref={ref} name="txtEmail" />
            </div>
        </>
    )
})

InputGroup.displayName = "ForwardRef"

export default InputGroup