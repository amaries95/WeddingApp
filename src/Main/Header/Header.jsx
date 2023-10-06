import Option from "./Option/Option";
import style from "./Header.module.css";
import "./../../Styles/Colors.css";

export default function Header (props) {
    const HeaderOptions = ["left-photo", "Itinerariu", "home", "Confirmare", "right-photo"];

    return (
        <div className={style["options-container"]}>
            <ul>
                {HeaderOptions.map( option => {
                    return (
                        <Option text={option} key={Math.random()} />
                    )
                })}
            </ul>
        </div>
    )
}