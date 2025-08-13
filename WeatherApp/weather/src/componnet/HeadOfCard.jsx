import style from "../Css/Head.module.css";
import { format, parse } from "date-fns";

export default function Head({ countryName,date }) {
  const parsedTime = parse(date, "HH:mm:ss", new Date());
  const time12 = format(parsedTime, "h:mm a");

  return (
    <div className={style.head}>
      <h2>{countryName}</h2>
      <p>{time12}</p>
    </div>
  );
}
