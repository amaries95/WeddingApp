import Option from "./Option/Option";
import style from "./Options.module.css";
import './../../../Styles/Colors.css';

export default function Options (props) {
    const HeaderOptions = ["Itinerariu", "Locatie", "home", "Galerie", "Confirmare"];

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