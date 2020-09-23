import React from "react";
import { useContext, useState } from "react";
import Button from "../components/Button";
import StateToggle from "./StateToggle";

const themes = {
    dark: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    light: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

export default () => {
    const [theme, setTheme] = useState(themes.dark)
    return (
        <ThemeContext.Provider value={theme} >
            <Toolbar />
            <StateToggle onChange={props => { props ? setTheme(themes.light) : setTheme(themes.dark) }} />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <Button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </Button>
    );
}