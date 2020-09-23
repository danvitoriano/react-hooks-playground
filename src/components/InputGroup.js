import React from "react";
import { forwardRef } from 'react'

const InputGroup = forwardRef((props, ref) => {
    return (
        <>
            <div key="a" className="form-group">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="txtName" className="form-control" aria-describedby="nameInput" />
            </div>
            <div key="b" className="form-group">
                <label htmlFor="name">Email: </label>
                <input type="email" ref={ref} name="txtEmail" className="form-control" aria-describedby="emailInput" />
            </div>
        </>
    )
})

InputGroup.displayName = "ForwardRef"

export default InputGroup