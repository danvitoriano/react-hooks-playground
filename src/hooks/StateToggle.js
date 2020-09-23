import React, { useState } from "react";
import Button from "../components/Button";

export default (props) => {
    const [state, setState] = useState(false);
    return (
        <Button
            onClick={() => {
                setState((previousState) => !previousState);
                props.onChange(!state);
            }}
            data-testid="toggle"
        >
            {state === true ? "Turn off" : "Turn on"}
        </Button>
    );
}
