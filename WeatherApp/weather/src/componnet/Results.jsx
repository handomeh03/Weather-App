import { UseData } from "../Context/WeatherContext";
import style from "../Css/Results.module.css"
import Card from "./Card";
export default function Results(){
    let {result}=UseData(); 
    return(
        <div className={style.Result}>
             {
                result?.map((e,index)=>{
                    return <Card key={index} data={e}/>
                })
             }
        </div>
    );
}