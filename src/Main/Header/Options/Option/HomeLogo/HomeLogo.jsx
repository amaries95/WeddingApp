import HomeLogoImage from "./HomeLogoImage.png";
import style from "./HomeLogo.module.css";

export default function HomeLogo() {
    return (
        <div className={style['home-logo-container']}>
            <img src={HomeLogoImage}></img>
        </div>
    );
}