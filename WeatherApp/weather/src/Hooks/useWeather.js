import { UseData } from "../Context/WeatherContext";
export function Useweather() {
  const { dispatch } = UseData();
  

  async function fetchdata(country) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();

      if (res.ok) {
        const weatherdata = data.list.slice(0, 10);

        dispatch({
          type: "fetchdata",
          payload: { data: weatherdata, countryname: country },
        }); 
      } else{
          dispatch({
          type: "fetchdata",
          payload: { data: [], countryname: "" },
        }); 
      }
      
    } catch (error) {
      console.error("Fetch error:", error);
      
    }
  }

  return { fetchdata };
}
