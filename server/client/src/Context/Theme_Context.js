import { createContext } from "react"

export const themes = {
    dark :{
        color : "white",
        backgroundColor : "#302aa2",
        
    },
    light : {
        color : "black",
        backgroundColor : "#57b6e2",

    }
}



const themeContext = createContext(themes.dark)

export default themeContext