import { HashLink } from "react-router-hash-link";
import style from "./Option.module.css";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";
import HomeLogoImage from "./HomeLogoImage.jpg";
import RightPhoto from "./RightPhoto.jpg";
import LeftPhoto from "./LeftPhoto.jpg";

export default function Option(props) {
    function renderHeader()
    {
        switch(props.text) {
            case 'home':
                return (
                    <HeaderPhoto src={HomeLogoImage}></HeaderPhoto>
                );
            case 'left-photo':
                return (
                    <HeaderPhoto src={LeftPhoto}></HeaderPhoto>
                );
            case 'right-photo':
                return (
                    <HeaderPhoto src={RightPhoto}></HeaderPhoto>
                );
            default:
                return (
                    <span>{props.text} </span>
                );
        }
    }


    return (
        <li>
            <HashLink smooth to={`#${props.text.toLowerCase() === 'home' ? '' : props.text.toLowerCase()}`}>
                {
                    renderHeader()
                }
            </HashLink>
        </li>
    )
}