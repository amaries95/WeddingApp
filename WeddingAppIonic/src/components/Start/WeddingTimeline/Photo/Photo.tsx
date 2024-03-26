import style from "./Photo.module.css";

interface PhotoProps {
    src: string;
  }

export default function Photo(props:PhotoProps) {
    return (
        <div className={style["photo-container"]}>
            <img src={props.src}></img>
        </div>
    );
}