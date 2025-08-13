import { UseData } from "../Context/WeatherContext";
import style from "../Css/Card.module.css";
import DataOfCard from "./DataOfCard";
import Head from "./HeadOfCard";
import Info from "./InfoOfCard";
export default function Card({ data }) {
  const date = data.dt_txt.split(" ")[1];
  let{countryName}=UseData();
  return (
    <div className={style.Card}>

        <Head countryName={countryName} date={date}/>

        <DataOfCard temp={Math.floor(data.main.temp)} description={data.weather[0].description} icon={data.weather[0].icon}/>
    
      <Info feelLike={Math.floor(data.main.feels_like)} humidity={data.main.humidity} windSpeed={data.wind.speed} windDeg={data.wind.deg} pressure={data.main.pressure} chanceOfRain={Math.round((data.pop || 0) * 100)} />
    </div>
  );
}
