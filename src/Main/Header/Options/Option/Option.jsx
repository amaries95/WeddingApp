import { ListGroupItem } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function Option(props) {
    return (
        <ListGroupItem>
            <HashLink smooth to={`#${props.text.toLowerCase() === 'home' ? ' ' : props.text.toLowerCase()}`}>
                <span>{props.text}</span>
            </HashLink>
        </ListGroupItem>
    )
}