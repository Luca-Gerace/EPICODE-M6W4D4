import { createContext } from "react";

const Context = createContext({
    user: {},
    theme: 'light', // default theme
    toggleTheme: () => {}, // switch theme
});

export default Context;