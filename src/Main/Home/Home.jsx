import style from './Home.module.css';
import HomeLoversPhoto from './HomeLoversPhoto.png';
import { FiExternalLink } from 'react-icons/fi';
import TimeLapse from './TimeLapse/TimeLapse';

export default function Home () {
    return (
        <>
            <div className={style['home-container']}>
                <div className={style['story-container']}>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Dupa 5 ani de relatie in care am invatat si am evoluat impreuna,
                        am decis sa facem urmatorul pas catre o canicie la fel de frumoasa.
                        Prin urmare, am vrea sa va invitam sa luati parte la acest eveniment
                        foarte important pentru noi.
                    </p>
                </div>
                <div className={style['lovers-container']}>
                    <div className={style['name-container']}>
                        <p>Alexandra Paparusca</p>
                    </div>

                    <div className={style['photo-container']}>
                        <img src={HomeLoversPhoto}></img>
                    </div>

                    <div className={style['name-container']}>
                        <p>Alexandru Maries</p>
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