import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    // user information to use globally
    const [user, setUser] = useState({});

    // initial route
    const [pathName, setPathName] = useState('/');

    // to save the date of every register 
    const [dataBillModal, setDataBillModal] = useState({})


    return (
        <DataContext.Provider
            value={{
                user,
                setUser,
                pathName,
                setPathName,
                dataBillModal,
                setDataBillModal

            }}
        >
            {children}
        </DataContext.Provider>
    );
};