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
        { photo: WeddingCake, title: "Intalnirea mirilor",hour: "14:00 - Casa parinteasca a mirelui", description: "Intalnirea mirilor va avea loc sub liliacului familiei Olar, plantat in anul 1951 de catre strabunica mirelui care a fost martor la numeroase evenimente ale familiei .Vom initia aceasta zi plina cu o mica receptie la resedinta mirelui si cu sarmale delicioase rulate de cuscre."},
        { photo: LegalCeremony, title: "Cununia Civilă",hour: "14:00 - Primaria din Radauti", description: "Vă invităm să fiți alături de noi atunci când spunem cel mai important DA din viața noastră. Cununia civilă va avea loc la primaria Radauti. Nu functionam bine sub presiune, astfel vom avea nevoie de sprijinul apropiatilor pentru a ne sopti raspunsul la intrebari."},
        { photo: SpiritualCeremony, title: "Cununia Religioasă", hour: "17:30", description: "Apoi, ușor ne vom îndrepta spre biserică, unde ne vom uni în fața lui Dumnezeu. Vă rugam să ne fiti alaturi si sa va deschideți inimile pentru noi."},
        { photo: Welcome, title: "Recepție Sală", hour: "19:30", description: "Aceasta zi importanta din viata noastra nu se poate termina fara o petrecere pe cinste, astfel va invitam la Grandiflora Celebration Ballrom pentru a cinsti un pahar de sampanie (2-3) si a petrece pana la rasarit in cinstea uniunii noastre."},
        { photo: FirstDance, title: "Dansul Mirilor", hour: "20:30", description: "Bineînțeles că vor fi multe emoții, însă cu susținerea voastră, sperăm că primul nostru dans în calitate de soț-soție să fie memorabil. De preferat, fără să ne împiedicăm."},
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
