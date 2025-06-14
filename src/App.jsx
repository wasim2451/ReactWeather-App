import './App.css'
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import {api,locationApi} from './api';
import { useWeather } from './context/Context';
import { useEffect } from 'react';
function App() {
    const{name,data,setData}=useWeather();
    useEffect(()=>{
        locationApi(setData);
    },[]);

    const handleSearch=async ()=>{ 
        const datafromAPI=await api(name);
        setData(datafromAPI);
    }
    const handleRefresh=()=>{
        locationApi(setData);
    }

    return (
        <>
            <div className='container-box'>
                <div className='container'>
                    <h1>WEATHER FORECAST ! 🌦️</h1>
                    <div className='input-search'>
                        <Input/>
                        <Button value="Search" function={handleSearch}/>
                    </div>
                   
                    <Card data={data}/>
                    <div className='button'>
                        <Button value="Refresh" function={handleRefresh}/>
                    </div>
                   
                </div>
            </div>

        </>
    )
}

export default App;
