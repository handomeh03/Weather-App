import style from "../Css/info.module.css";
export default function Info({feelLike , humidity ,windSpeed ,windDeg,pressure ,chanceOfRain  }){
    return(
        <div className={style.information}>
                <div className={style.infoOfweather}>
                  <span>Feel like : </span>
                  <span>{feelLike} °c</span>
                </div>
                <div className={style.infoOfweather}>
                  <span>humidity  : </span>
                  <span>{humidity} %</span>
                </div>
                <div className={style.infoOfweather}>
                  <span>windSpeed  : </span>
                  <span>{windSpeed} m/s</span>
                </div>
                <div className={style.infoOfweather}>
                  <span> windDeg : </span>
                  <span>{windDeg} °c</span>
                </div>
                <div className={style.infoOfweather}>
                  <span> pressure : </span>
                  <span>{pressure} hPa</span>
                </div>
                <div className={style.infoOfweather}>
                  <span>chanceOfRain : </span>
                  <span>{chanceOfRain} %</span>
                </div>
               
              </div>
    );
}