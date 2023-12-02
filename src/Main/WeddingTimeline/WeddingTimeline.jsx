import Photo from './Photo/Photo';
import style from './WeddingTimeline.module.css';
import LegalCeremony from "./Photos/cununica_civila.png";
import SpiritualCeremony from "./Photos/cununia_religioasa.png";
import FirstDance from "./Photos/dansul_mirilor.png";
import Welcome from "./Photos/intampinare_invitati.png";
import PhotoSession from "./Photos/sedinta_foto.png";
import WeddingCake from "./Photos/taierea_tortului.png";
import Description from './Description/Description';
import SplitLine from './SplitLine/SplitLine';
import LeftDecorativePhoto from './Photos/left-flower.png';
import RightDecorativeFlower from './Photos/right-flower.png';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WeddingTimeline () {
    const weddingTimelineList = [
        { photo: LegalCeremony, title: "Cununia Civila",hour: "12:00", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina, precum și activistului bielorus Ales Bialiațki, pentru munca lor de apărare a drepturilor fundamentale."},
        { photo: SpiritualCeremony, title: "Cununia Religioasa", hour: "12:15", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina, precum și activistului bielorus Ales Bialiațki."},
        { photo: PhotoSession, title: "Sesiune Foto", hour: "13:30", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina"},
        { photo: Welcome, title: "Receptie Sala Regina Maria", hour: "14:30", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina"},
        { photo: FirstDance, title: "Dansul Mirilor", hour: "15:30", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina"},
        { photo: WeddingCake, title: "Tortul", hour: "21:00", description: "Anul trecut, Premiul Nobel pentru Pace a fost acordat organizațiilor pentru drepturile omului Memorial din Rusia și Centrul pentru Libertăți Civile din Ucraina"},
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