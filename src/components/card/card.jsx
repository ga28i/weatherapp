import "./card.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div>{data.time.split(" ")[1]}</div>
      <img
        src={data.condition.icon}
        className="icon-small"
        alt="weather"
      />
      <p>{data.temp_c}°C</p>
      <p>{data.pressure_mb}hPa</p>
      <p>{data.humidity}%</p>
    </div>
  );
};

export default Card;
