import Home from './Home/Home';
import WeddingTimeline from './WeddingTimeline/WeddingTimeline';
import Location from './Location/Location';
import InvitationForm from './InvitationForm/InvitationForm';
import Header from './Header/Header';

export default function Main() {
    return (
        <>
            <Header></Header>
            <section id=""><Home /></section>
            <section id="itinerariu"><WeddingTimeline /></section>
            <section id="locatie"><Location /></section>
            <section id="galerie"><InvitationForm /></section>
            <section id="confirmare"><InvitationForm /></section>
        </>
        
    );
}