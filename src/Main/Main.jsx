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
            <section id="weddingtimeline"><WeddingTimeline /></section>
            <section id="location"><Location /></section>
            <section id="invitationform"><InvitationForm /></section>
        </>
        
    );
}