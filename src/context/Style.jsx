import { createContext, useContext, useState } from "react";

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
    const [check, setCheck] = useState(true)
    return (
        <StyleContext.Provider value={
            {
                check, setCheck
            }
        }>
            {children}
        </StyleContext.Provider>
    )
};
const StyleContextProvider = () => {
    return (useContext(StyleContext))
};

export { StyleProvider };
export default StyleContextProvider;