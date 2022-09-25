import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { Link } from 'react-router-dom';
import { getDayFromDate } from '../../services/utils';
import "./forecast.css";

const ForecastDays = ({ data }) => {
   
  return (
    <>
      <div className="forecast-container">
        <label className="title">Daily</label>
        <Link to="/detailed-forecast">Forecast Details</Link>
      </div>
      <Accordion allowZeroExpanded>
        {data?.forecast.forecastday.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={item?.day?.condition?.icon}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{getDayFromDate(item.date)}</label>
                  <label className="description">
                    {item?.day?.condition?.text}
                  </label>
                  <label className="min-max">
                    {item.day.maxtemp_c}°C /
                    {item.day.mintemp_c}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Avg. Temperature:</label>
                  <label>{item.day.avgtemp_c}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Avg. Humidity:</label>
                  <label>{item.day.avghumidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Avg. visibility:</label>
                  <label>{item.day.avgvis_km}Km</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Chance_of_rain:</label>
                  <label>{item.day.daily_chance_of_rain}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Max wind speed:</label>
                  <label>{item.day.maxwind_kph}km/h</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>UV Radiation:</label>
                  <label>{item.day.uv}%</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastDays;
