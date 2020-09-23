import React, { useState, useEffect } from "react";

export default (props) => {
    const [user, setUser] = useState(null);

    async function fetchUserData(id) {
        const response = await fetch("https://reqres.in/api/users/" + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id);
    }, [props.id]);

    if (!user) {
        return "loading...";
    }

    return (
        <details>
            <summary>{`${user.data.first_name} ${user.data.last_name}`}</summary>
            <strong>{user.data.email}</strong>
            <img src={user.data.avatar} alt={user.data.id} />
        </details>
    );
}