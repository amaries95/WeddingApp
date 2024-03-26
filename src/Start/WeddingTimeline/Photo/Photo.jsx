import style from "./Photo.module.css";

export default function Photo(props) {
    return (
        <div className={style["photo-container"]}>
            <img src={props.src}></img>
        </div>
    );
}