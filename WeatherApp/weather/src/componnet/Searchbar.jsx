import style from "../Css/Serach.module.css"
import { useState } from "react";
import { Useweather } from "../Hooks/useWeather";
import SearchIcon from '@mui/icons-material/Search';




export default function Searchbar(){
 let {fetchdata}=Useweather();
  let [inputs,setInput]=useState("");
 
  function handleFetchWeather(e){
    e.preventDefault();
    fetchdata(inputs);
  }

    return(
        <div className={style.Serach}>
        <input type="text" value={inputs} onChange={(e)=>{setInput(e.target.value)}}></input>
      <SearchIcon className={style.button} onClick={handleFetchWeather} style={{borderRadius:"1rem",cursor:"pointer"}}/>
        </div>
    );
}