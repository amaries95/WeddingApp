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
        { photo: LegalCeremony, title: "Cununia Civila",hour: "12:00", description: "Va invitam sa fiti alaturi de noi atunci cand spunem cel mai important DA din viata noastra. Cununia civila va avea loc langa lacul de vis-a-vis de biserica. Avand in vedere ca vom avea toate florile din lume la petrecere, va rugam sa nu aduceti nimic. Daca chiar nu se poate altfel, o sticla de vin."},
        { photo: SpiritualCeremony, title: "Cununia Religioasa", hour: "12:15", description: "Apoi, usor ne vom indrepta spre biserica. Aici ne vom uni si in fata lui Dumnezeu. Va rugam sa va asezati si sa va deschideti inimile pentru noi."},
        { photo: PhotoSession, title: "Sesiune Foto", hour: "13:30", description: "Avand in vedere ca vrem sa pastram amintirea acestei zile toata viata, va invitam si la sedinta foto de dupa cununia religioasa. Va rugam sa aveti rabdare si sa participati la toate propunerile fotografiilor."},
        { photo: Welcome, title: "Receptie Sala Regina Maria", hour: "14:30", description: "REFORMULARE - Va invitam sa va luati papucii cei buni, pentru ca ne-ar placea sa va vedem cat mai mult pe ringul de dans."},
        { photo: FirstDance, title: "Dansul Mirilor", hour: "15:30", description: "Bineinteles ca vor fi multe emotii, insa cu sustinerea voastra, speram ca primul nostru dans in calitate de sot-sotie sa fie memorabil. De preferabil, fara sa ne impiedicam."},
        { photo: WeddingCake, title: "Tortul", hour: "21:00", description: "Bucurati-va alaturi de noi de prajituri, cocktail-uri si de toate surprizele zilei."},
        { photo: TheEnd, title: "Sfarsitul Petrecerii", hour: "23:30", description: "Bucurati-va alaturi de noi de prajituri, cocktail-uri si de toate surprizele zilei."}
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