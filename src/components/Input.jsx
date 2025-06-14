import React from "react";
import { useWeather } from "../context/Context";

const Input = () => {
    const {name,setName}=useWeather();
    
    const handleAPI=(e)=>{
        const val=e.target.value;
        setName(val);
    }

    return (
        <div className="coolinput">
            <label className="text">Search City</label>
            <input type="text" placeholder="Write here..." name="input" className="input"
                onChange={handleAPI}
            />
        </div>
    )
}
export default Input;