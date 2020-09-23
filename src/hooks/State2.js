import React, { useState } from "react";
import Button from "../components/Button";

export default () => {
    // Declara uma nova variável de state, que chamaremos de "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
};
