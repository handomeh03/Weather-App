import { createContext, useContext, useReducer } from "react";

const WeatherCont = createContext();

export default function Providers({ children }) {
    function reducer(state, action) {
        switch (action.type) {
            case "fetchdata":
                return { ...state, result: action.payload.data,countryName:action.payload.countryname };
            default:
                return state;
        }
    }

    let [state, dispatch] = useReducer(reducer, { result: [],countryName:"" });

    return (
        <WeatherCont.Provider value={{ ...state, dispatch }}>
            {children}
        </WeatherCont.Provider>
    );
}

export function UseData() {
    const context = useContext(WeatherCont);
    if (!context) {
        throw new Error("useData must be used within a Weather Provider");
    }
    return context; 
}
