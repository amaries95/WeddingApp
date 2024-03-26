import style from "./HeaderPhoto.module.css";

export default function HeaderPhoto(props) {
    return (
        <div className={style['home-logo-container']}>
            <img src={props.src}></img>
        </div>
    );
}