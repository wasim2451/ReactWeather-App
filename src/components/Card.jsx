import React from "react";

const Card = ({ data }) => {
    if(data?.error){
        return(
            <>
                <div className="weather-card">
                    {data.error.message}
                </div> 
            </>
        );
    }
    return (
        <>
            <div className="weather-card">
            {data ?<>
                <img src={data?.current?.condition?.icon} alt="Weather Icon" className="weather-icon" />
                <h2 className="city-name">{data?.location?.name}</h2>
                <p className="temperature">🌡️ {data?.current?.temp_c}°C</p>
                <p className="temperature">Humidity : {data?.current?.humidity}</p>
                <p className="description">{data?.current?.condition?.text}</p>
            </>:<>
                <p className="temperature">Loading ...</p>
            </>}
                
            </div>

        </>
    );
}
export default Card;