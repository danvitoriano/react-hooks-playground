import React from "react";
import { useContext } from "react";

const ThemeContext = React.createContext("light")
const LanguageContext = React.createContext("English")

export default () => {
    const theme = useContext(ThemeContext)
    const language = useContext(LanguageContext)
    return (
        <>
            <div><b>Tema:</b> {theme}</div>
            <div><b>Language:</b> {language}</div>
        </>
    )
}
