import { createContext, useContext, useState } from "react";

const MyContext = createContext(undefined)

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
    const[ count, setCount] = useState(0)

    const increment = () => setCount(count => count + 1)

    return (
        <MyContext.Provider value={{ count, increment }}>
            {children}    
        </MyContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSharedContext = () => {
    const context = useContext(MyContext)
    if(!context) throw new Error('something went wrong')
    return context
}