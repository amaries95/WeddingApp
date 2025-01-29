import style from "./Photo.module.css";

export default function Photo(props) {
    if(props.index === 3)
    {
        console.log("car");
        return <div className={style["photo-container-car"]}>
            <img src={props.src}></img>
        </div>
    }
    
    return (
        <div className={style["photo-container"]}>
            <img src={props.src}></img>
        </div>
    );
}