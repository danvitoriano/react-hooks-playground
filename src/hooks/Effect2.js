import React, { useState, useEffect } from "react";
import Button from "../components/Button";

export default () => {
    const [count, setCount] = useState(0);

    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o título do documento utilizando a API do navegador
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
};
