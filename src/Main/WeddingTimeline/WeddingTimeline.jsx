import Photo from './Photo/Photo';
import style from './WeddingTimeline.module.css';
import LegalCeremony from "./Photos/cununica_civila.png";
import SpiritualCeremony from "./Photos/cununia_religioasa.png";
import FirstDance from "./Photos/dansul_mirilor.png";
import Welcome from "./Photos/intampinare_invitati.png";
import BrideMeeting from "./Photos/intalnirea-mirilor.png";
import FotoSession from "./Photos/sedinta-foto.png";
import TheEnd from "./Photos/sfarsitul-petrecerii.png";
import Description from './Description/Description';
import SplitLine from './SplitLine/SplitLine';
import RoadLine from './Photos/road.png';
import LeftDecorativePhoto from './Photos/liliac-stanga.png';
import RightDecorativeFlower from './Photos/liliac-dreapta.png';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WeddingTimeline () {
    const weddingTimelineList = [
        { photo: BrideMeeting, title: "Întâlnirea mirilor",hour: "13:30 - Casa parintească a mirelui", description: "Întâlnirea mirilor va avea loc sub liliacului familiei Olar, plantat în anul 1951 de către străbunica mirelui. Acest arbore a fost martor la numeroase evenimente ale familiei Olar printre care și botezul mirelui. Vom iniția această zi plină cu o mică recepție la reședința mirelui și cu sarmale delicioase rulate de cuscre."},
        { photo: LegalCeremony, title: "Cununia Civilă",hour: "14:00 - Primăria din Rădăuți", description: "Vă invităm să fiți alături de noi atunci când spunem cel mai important DA din viața noastră. De asemeni, cununia civilă va avea loc la resedința familiei Olar. Nu funcționam bine sub presiune, astfel vom avea nevoie de sprijinul apropiaților pentru a ne șopti răspunsul la întrebări."},
        { photo: SpiritualCeremony, title: "Cununia Religioasă", hour: "17:30", description: "Apoi, ușor ne vom îndrepta spre biserică, unde ne vom uni în fața lui Dumnezeu. Vă rugam să ne fiti alături si sa va deschideți inimile pentru noi."},
        { photo: FotoSession, title: "Sedinta foto", hour: "17:30", description: "Având în vedere că vrem să păstrăm amintirea acestei zile toată viața, vă invităm la o scurtă ședință foto de după cununia religioasa. Vă rugăm să aveți răbdare și să participați la toate propunerile fotografilor. Vom profita de acest timp și pentru o scurtă revizie tehnică la Dacie."},
        { photo: Welcome, title: "Recepție Sală", hour: "19:30", description: "Această zi importantă din viața noastră nu se poate termina fără o petrecere pe cinste, astfel vă invităm la Grandiflora Celebration Ballrom pentru a cinsti un pahar de șampanie (2-3) și a petrece până la răsărit în cinstea uniunii noastre."},
        { photo: FirstDance, title: "Dansul Mirilor", hour: "20:30", description: "Bineînțeles că vor fi multe emoții, însă cu susținerea voastră, sperăm ca primul nostru dans în calitate de soț-soție să fie memorabil. De preferat, fără să ne împiedicăm."},
        // { photo: WeddingCake, title: "Tortul", hour: "21:15", description: "Momentul tortului este o pauză plină de bucurie. Artificiile strălucesc, iar zâmbetele se împrăștie în jur. Pregatiți-vă papilele gustative pentru un moment dulce."},
        // { photo: TheEnd, title: "Sfarșitul Petrecerii", hour: "23:30", description: "Tot ce e frumos trebuie să aibă și un sfârșit, însă suntem siguri că o să ne revedem curând la următoarea petrecere. Înainte să vă luați la revedere, vă invităm să luați mărturiile pregătite de noi pentru a ne aminti de această zi."}
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
                            return (<Photo index={i} src={element.photo} key={Math.random() * 100} />);
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
                                <Photo index={i} src={element.photo} key={Math.random() * 100} />
                            </div>)
                    })}
                </div>
            
            }
        </>
        
    );
}
