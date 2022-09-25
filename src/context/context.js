import { createContext, useState } from "react";


const Context = createContext();

const Provider = ({children}) => {
    const [forecast, setForecast] = useState();
    const [currentWeather, setCurrentWeather] = useState();

    return <Context.Provider value={{forecast, setForecast, currentWeather, setCurrentWeather}}>{children}</Context.Provider>
}

export { Provider, Context }