import style from './Home.module.css';
import HomeLoversPhoto from './LoversPhoto.png';
import { FiExternalLink } from 'react-icons/fi';
import TimeLapse from './TimeLapse/TimeLapse';
import { useEffect } from 'react';
import { Https, Host, Post, IncreaseViews } from "../../Shared/UrlConstants";

export default function Home () {
    useEffect(() => {
        increaseViews();
    }, [])

    function increaseViews () {
        fetch(Https + Host + IncreaseViews, {
            method: Post,
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Host: Host
            },
          })
            .then((response) => {
              if (!response.ok) {
                console.log("Views not successfully incremented!");
              }
              else {
                console.log("Views incremented!");
              }
        })
    }

    return (
        <>
            <div className={style['home-container']}>
                <div className={style['lovers-container']}>
                    <div className={style['lovers-words-container']}>
                        <div className={style['name-container']}>
                            <p>Tery</p>
                        </div>
                        <div className={style['words-container']}>
                            <span>"</span>
                            <p>
                            Looks like we’ve made it,<br/>
                            Look how far we’ve come my baby.<br/>
                            Când suntem impreună, nimic nu poate sta in calea noastră. Nu mi-am imaginat niciodată că cineva mă va face atât de fericită. Ești special, mă completezi și dai sens vieții mele. 
</p><span>"</span>
                        </div>
                        
                    </div>

                    <div className={style['photo-container']}>
                        <img src={HomeLoversPhoto}></img>
                    </div>

                    <div className={style['lovers-words-container']}>
                        <div className={style['name-container']}>
                            <p>Mitză</p>
                        </div>
                        <div className={style['words-container']}>
                            <span>"</span><p>Love is a long road. Din motivul acesta mi-am ales cel mai bun copilot. Știm că doar împreună putem urmări ruta corectă, vom putea trece peste orice obstacol de pe traseu și vom ajunge la destinație, împreună. Abia aștept să văd ce aventuri ne așteaptă și după acest eveniment din viețile noastre.</p><span>"</span>
                        </div>
                    </div>
                </div>
                <div className={style['date-container']}>
                    <div className={style['date']}>
                        <p>24 Mai 2025</p>
                    </div>
                    <div className={style['location']}>
                        <a href='https://maps.app.goo.gl/73bxfvEQKZzYuWP58' target="_blank">
                            <p>Grandiflora Celebration Ballroom<FiExternalLink></FiExternalLink>
                            </p>
                        </a>

                    </div>
                    <div className={style['address']}>
                        <p>DJ178C, 727250, Rădăuți</p>
                    </div>
                </div>
                <TimeLapse></TimeLapse>
            </div>
        </>
    );
} 