import { ListGroup } from "react-bootstrap";
import Option from "./Option/Option";

export default function Options (props) {
    const HeaderOptions = ["home", "weddingtimeline", "location", "invitationform"];

    return (
        <ListGroup>
            {HeaderOptions.map( option => {
                return (
                    <Option text={option} key={Math.random()} />
                )
            })}
        </ListGroup>
    )
}