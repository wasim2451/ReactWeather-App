import { createContext,useContext, useState } from "react";

// Create a Context
const weatherContext=createContext(null);
// Create a Provider
const Context=(props)=>{
    const[name,setName]=useState(""); // search bar 
    const[data,setData]=useState(null); // api data
    return(
        <weatherContext.Provider value={{name,setName,data,setData}}>{props.children}</weatherContext.Provider>
    )
};

const useWeather=()=>{
    const data=useContext(weatherContext);
    return data;
};

export {Context,useWeather};