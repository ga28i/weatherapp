import { useContext } from "react";
import { Context } from "../context/context";
import Card from "../components/card/card";
import { getDayFromDate } from "../services/utils";


const DetailedForecast = () => {
  const { forecast } = useContext(Context);

  return (
    <>
      <div className="detailed-forecast-container p-4">
        {forecast?.forecast?.forecastday?.map((day) => (
          <div className="detailed-forecast-row" key={day.date}>
            <h4 style={{ color: "white" }}>{getDayFromDate(day.date)}</h4>
            <div className="detailed-forecast-scrolable-row">
              {day.hour.map((obj, index) => (
                <Card data={obj} key={`detailed-forecast-card-${index}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailedForecast;
