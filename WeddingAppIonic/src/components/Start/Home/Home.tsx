import style from './Home.module.css';
import HomeLoversPhoto from './HomeLoversPhoto.jpg';
import { FiExternalLink } from 'react-icons/fi';
import TimeLapse from './TimeLapse/TimeLapse';
import { useEffect } from 'react';
import Https from './../Shared/UrlConstants';
import Host from './../Shared/UrlConstants';
import Post from './../Shared/UrlConstants';
import IncreaseViews from './../Shared/UrlConstants';

export default function Home () {
    useEffect(() => {
        increaseViews();
    }, [])

    function increaseViews () {
        // fetch(", {
        //     method: Post,
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "*/*",
        //       Host: Host
        //     },
        //   })
        //     .then((response) => {
        //       if (!response.ok) {
        //         console.log("Views not successfully incremented!");
        //       }
        //       else {
        //         console.log("Views incremented!");
        //       }
        // })
    }

    return (
        <>
            <div className={style['home-container']}>
                <div className={style['lovers-container']}>
                    <div className={style['lovers-words-container']}>
                        <div className={style['name-container']}>
                            <p>Ale</p>
                        </div>
                        <div className={style['words-container']}>
                            <span>"</span><p>Îmi place să cred că tot ceea ce nu sunt eu, ești tu și invers. Promit să te iubesc și să fiu alături de tine și în următorii 100 de ani din viața noastră!</p><span>"</span>
                        </div>
                        
                    </div>

                    <div className={style['photo-container']}>
                        <img src={HomeLoversPhoto}></img>
                    </div>

                    <div className={style['lovers-words-container']}>
                        <div className={style['name-container']}>
                            <p>Alex</p>
                        </div>
                        <div className={style['words-container']}>
                            <span>"</span><p>În acești 5 ani de relație am învățat unul de la celălalt și am evoluat împreună. Din fericire, suntem abia la începutul călătoriei. Promit că voi fi partenerul tău pe toată durata acesteia, să te iubesc, să te respect și să te susțin în toate visurile tale.</p><span>"</span>
                        </div>
                    </div>
                </div>
                <div className={style['date-container']}>
                    <div className={style['date']}>
                        <p>8 Iunie 2024</p>
                    </div>
                    <div className={style['location']}>
                        <a href='https://maps.app.goo.gl/9XWnV1PMpbciENLa6' target="_blank">
                            <p>Sun Garden Resort <FiExternalLink></FiExternalLink>
                            </p>
                        </a>

                    </div>
                    <div className={style['address']}>
                        <p>str. Poiana Cerbului 1000, Baciu, CJ</p>
                    </div>
                </div>
                <TimeLapse></TimeLapse>
            </div>
        </>
    );
} 