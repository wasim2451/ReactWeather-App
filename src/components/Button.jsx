import React from "react";
import { useWeather } from "../context/Context";

const Button=(props)=>{
    const{name,setName}=useWeather();
    return (
        <button onClick={props.function}>{props.value}</button>
    )
}
export default Button;