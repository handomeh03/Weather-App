import Header from "../componnet/Header";
import Results from "../componnet/Results";
import Searchbar from "../componnet/Searchbar";
import style from "../Css/Weather.module.css"
export default function Weather(){
    return(
        <div className={style.Weather}>
            <Header/>
            <Searchbar/>
            <Results/>
        </div>
    );
}