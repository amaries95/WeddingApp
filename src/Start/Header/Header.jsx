import Option from "./Option/Option";
import style from "./Header.module.css";
import "./../../Styles/Colors.css";
import { useEffect, useState } from "react";

export default function Header (props) {
    const normalScreenOptions = ["left-photo", "Itinerariu", "home", "Confirmare", "right-photo"];
    const smallScreenOptions = ["Itinerariu", "home", "Confirmare"];
    const [headerOptions, setHeaderOptions] = useState(normalScreenOptions);

    useEffect(() => {
        function handlerRezize() {
            if(window.innerWidth < 800)
            {
                setHeaderOptions(smallScreenOptions);
            }
            else {
                setHeaderOptions(normalScreenOptions);
            }

        }

        handlerRezize();
        window.addEventListener('resize', handlerRezize);
    }, []);

    return (
        <div className={style["options-container"]}>
            <ul>
                {headerOptions.map( option => {
                    return (
                        <Option text={option} key={Math.random()} />
                    )
                })}
            </ul>
        </div>
    )
}