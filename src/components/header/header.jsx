import { useContext } from "react";
import { Context } from "../../context/context";
import Search from "../search/search";
import { currentWeatherFetch, forecastFetch } from "../../services/api";
import { Link } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import "./header.css";

const Header = () => {
  const { setForecast, setCurrentWeather } = useContext(Context);

  const handleOnSearchChange = (searchData) => {
    const searchedCityName = searchData.label.split(",")[0];
    console.log(searchedCityName);
    Promise.all([
      currentWeatherFetch(searchedCityName),
      forecastFetch(searchedCityName),
    ])
      .then((response) => {
        console.log(response);
        const weatherResponse = response[0];
        const forecastResponse = response[1];

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <nav>
      <div className="header-container">
        <Link to="/"><ImHome3 /></Link>
        <Search onSearchChange={handleOnSearchChange} className="search-input"/>
      </div>
    </nav>
  );
};

export default Header;
