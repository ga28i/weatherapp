import diacritics from "diacritics";

export const sortForecastByDays = (forecastData) => {
    const forecastObj = {};
    forecastData.forEach((obj) => {
      const key = obj.dt_txt.split(" ")[0];
      if (forecastObj[key]) {
        forecastObj[key].push(obj);
      } else {
        forecastObj[key] = [obj];
      }
    });
    return forecastObj;
  };

 export const getDayFromDate = (dateString) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return weekDays[date.getDay()];

 }

 export const removeDiacritics = (strWithDiacritics) => {
  const temp = diacritics.remove(strWithDiacritics);
  return temp
 }