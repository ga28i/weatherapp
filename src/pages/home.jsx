import { useContext } from 'react';
import { Context } from '../context/context';
import CurrentWeather from "../components/currentWeather/currentWeather";
import Forecast from "../components/forecast/forecast";

const Home = () => {
  const {currentWeather, forecast} = useContext(Context);
  console.log({forecast})
   return(<>
    {currentWeather && <CurrentWeather data={currentWeather} />}
      <div style={{ padding: "20px" }}>
        {forecast && <Forecast data={forecast} />}
      </div>
      </>
   )
}

export default Home;