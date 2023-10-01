import { HashLink } from "react-router-hash-link";
import style from "./Option.module.css";
import "./../../../../Styles/Colors.css";
import HomeLogo from "./HomeLogo/HomeLogo";

export default function Option(props) {
    return (
        <li>
            <HashLink smooth to={`#${props.text.toLowerCase() === 'home' ? '' : props.text.toLowerCase()}`}>
                {props.text === 'home' ?
                 <HomeLogo></HomeLogo>:
                 <span>{props.text} </span>}
            </HashLink>
        </li>
    )
}