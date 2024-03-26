import Home from './Home/Home';
import WeddingTimeline from './WeddingTimeline/WeddingTimeline';
import InvitationForm from './InvitationForm/InvitationForm';
import Header from './Header/Header';

export default function Main() {
    return (
        <>
            <Header></Header>
            <section id=""><Home /></section>
            <section id="itinerariu"><WeddingTimeline /></section>
            <section id="confirmare"><InvitationForm /></section>
        </>
        
    );
}