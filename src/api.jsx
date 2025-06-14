 const api=async(city)=>{
    const res=await fetch(`https://api.weatherapi.com/v1/current.json?key=0cf064dfa21e4631be8110337251406&q=${city}&aqi=yes`);
    const data=await res.json();
    return data;
 }

 const locationApi=async (setData)=>{
     navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const res = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=0cf064dfa21e4631be8110337251406&q=${lat},${lon}&aqi=yes`
                );
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching weather:", error);
                alert("Failed to fetch weather. Try again.");
            }
        },
        (error) => {
            console.error("Location access denied or failed:", error);
            alert("Location access is required to get local weather.");
        }
    );


 }
 export {api,locationApi};