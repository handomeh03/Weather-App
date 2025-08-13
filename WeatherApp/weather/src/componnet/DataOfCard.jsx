import style from "../Css/DataOfCard.module.css";
export default function DataOfCard({temp,description,icon}){
    return(
        <div className={style.data}>
                <h1 className={style.temp}>{temp} °c</h1>
                <div className={style.icon}>
                  <span>{description}</span>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                  />
                </div>
              </div>
    );
}