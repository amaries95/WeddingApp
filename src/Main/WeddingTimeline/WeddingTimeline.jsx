import Photo from './Photo/Photo';
import style from './WeddingTimeline.module.css';
import LegalCeremony from "./Photos/cununica_civila.png";
import SpiritualCeremony from "./Photos/cununia_religioasa.png";
import FirstDance from "./Photos/dansul_mirilor.png";
import Welcome from "./Photos/intampinare_invitati.png";
import PhotoSession from "./Photos/sedinta_foto.png";
import WeddingCake from "./Photos/taierea_tortului.png";
import TheEnd from "./Photos/sfarsitul-petrecerii.png";
import Description from './Description/Description';
import SplitLine from './SplitLine/SplitLine';
import LeftDecorativePhoto from './Photos/left-flower.png';
import RightDecorativeFlower from './Photos/right-flower.png';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WeddingTimeline () {
    const weddingTimelineList = [
        { photo: LegalCeremony, title: "Cununia Civilă",hour: "12:00", description: "Vă invităm să fiți alături de noi atunci când spunem cel mai important DA din viața noastră. Cununia civilă va avea loc lângă lacul de vis-a-vis de biserică. Având în vedere că vom avea toate florile din lume la petrecere, vă rugăm să nu aduceți nimic. Dacă chiar nu se poate altfel, o sticlă de vin e suficientă."},
        { photo: SpiritualCeremony, title: "Cununia Religioasă", hour: "12:30", description: "Apoi, ușor ne vom îndrepta spre biserică. Aici ne vom uni și în fața lui Dumnezeu. Vă rugam să vă așezați și să vă deschideți inimile pentru noi."},
        { photo: PhotoSession, title: "Sesiune Foto", hour: "13:30", description: "Având în vedere că vrem să păstrăm amintirea acestei zile toată viața, vă invităm la ședința foto de după cununia religioasă. Vă rugăm să aveți răbdare și să participați la toate propunerile fotografilor."},
        { photo: Welcome, title: "Recepție Sală Regina Maria", hour: "14:30", description: "Va invităm să savurați toate preparatele zilei și să vă luați papucii de schimb, pentru că ne-ar plăcea să vă vedem cât mai mult pe ringul de dans. Simțiți-vă ca acasă și bucurați-vă de fiecare clipă alături de noi."},
        { photo: FirstDance, title: "Dansul Mirilor", hour: "15:45", description: "Bineînțeles că vor fi multe emoții, însă cu susținerea voastră, sperăm că primul nostru dans în calitate de soț-soție să fie memorabil. De preferat, fără să ne împiedicăm."},
        { photo: WeddingCake, title: "Tortul", hour: "21:15", description: "Momentul tortului este o pauză plină de bucurie. Artificiile strălucesc, iar zâmbetele se împrăștie în jur. Pregatiți-vă papilele gustative pentru un moment dulce."},
        { photo: TheEnd, title: "Sfarșitul Petrecerii", hour: "23:30", description: "Tot ce e frumos trebuie să aibă și un sfârșit, însă suntem siguri că o să ne revedem curând la următoarea petrecere. Înainte să vă luați la revedere, vă invităm să luați mărturiile pregătite de noi pentru a ne aminti de această zi."}
    ];

    const [isNormalScreen, setIsNormalScreen] = useState(true);

    useEffect(() => {

        function handleResize(){
            if(window.innerWidth < 751)
            {
                setIsNormalScreen(false);
            }
            else{
                setIsNormalScreen(true);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isNormalScreen && 
            <div className={style['container']}>
                <div className={style['decorative-left-container']}>
                        <img src={LeftDecorativePhoto}></img>
                </div>
                <div className={style['left-container']}>
                    {weddingTimelineList.map((element, i) => {
                        if(i % 2 === 0){
                            return (<Photo src={element.photo} key={Math.random() * 100} />);
                        }
                        return <Description 
                                    key={Math.random() * 100}
                                    title={element.title}
                                    hour={element.hour}
                                    description={element.description} />
                    })}
                </div>
                <div className={style['mid-container']}>
                    {weddingTimelineList.map((element, i) => {
                        return <SplitLine key={i}/>
                    })}
                </div>
                <div className={style['right-container']}>
                    {weddingTimelineList.map((element, i) => {
                        if(i % 2 !== 0){
                            return (<Photo src={element.photo} key={Math.random() * 100} />);
                        }
                        return <Description 
                                    key={Math.random() * 100}
                                    title={element.title}
                                    hour={element.hour}
                                    description={element.description} />
                    })}
                </div>
                <div className={style['decorative-right-container']}>
                    <img src={RightDecorativeFlower}></img>
                </div>
            </div>}

            {!isNormalScreen && 
            <div className={style['mobile-container']}>
                {/* <div className={style['mid-container']}>
                    {weddingTimelineList.map((element, i) => {
                        return <SplitLine key={i}/>
                    })}
                </div> */}
                
                    {weddingTimelineList.map((element, i) => {
                        return (
                            <div className={style['mobile-element-container']}>
                                <Description
                                        key={Math.random() * 100}
                                        title={element.title}
                                        hour={element.hour}
                                        description={element.description} />
                                <Photo src={element.photo} key={Math.random() * 100} />
                            </div>)
                    })}
                </div>
            
            }
        </>
        
    );
}