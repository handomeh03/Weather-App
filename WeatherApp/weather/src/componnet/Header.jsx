import style from "../Css/Header.module.css"
export default function Header(){
    return(
        <div className={style.Header}>
           <h1>Weather app</h1>
        </div>
    );
}