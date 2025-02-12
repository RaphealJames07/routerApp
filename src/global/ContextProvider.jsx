/* eslint-disable react/prop-types */
import {createContext} from "react";

// Step 1 - create and export your context
export const EgbujContext = createContext();

// Step 2 - Access children property from Component tree
const ContextProvider = ({children}) => {
    // Step 3 - return your Context With .Provider around your children
    return (
        // Step 4 - declare or pass value to your subscribers via provider property (value)
        <EgbujContext.Provider
            value={{
                count: 0,
                samuel: -10,
            }}
        >
            {children}
        </EgbujContext.Provider>
    );
};

export default ContextProvider;

// Step 5 - Import Around your Top Component tree (main.jsx)
