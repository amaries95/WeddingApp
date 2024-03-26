import style from "./Description.module.css";

export default function Description (props) {
    const hourWord = "ora ";

    return (
        <div className={style["description-container"]}>
            <div className={style["description-header"]}>
                <p>{props.title}</p>
                <span>{hourWord+props.hour}</span>
            </div>
            <div className={style["description-text"]}>
                <p>{props.description}</p>
            </div>
        </div>
    );
}