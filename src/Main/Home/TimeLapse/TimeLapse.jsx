import { useEffect, useState, useRef } from 'react';
import TimeBlock from './TimeBlock/TimeBlock';
import style from './TimeLapse.module.css';
import Moment from 'react-moment';
import moment from 'moment';

export default function TimeLapse () {
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function dateDiffInDays () {
        const now = moment();
        const target = moment('2025-05-24T12:00:00');
        const duration = moment.duration(target.diff(now));

        return duration;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            var remainingTime = dateDiffInDays();
            setSeconds(remainingTime._data.seconds);
            setMinutes(remainingTime._data.minutes);
            setHours(remainingTime._data.hours);
            setDays(remainingTime._data.days);
            setMonths(remainingTime._data.months);

        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={style['time-lapse-container']}>
            <TimeBlock Value={months} Description='LUNI'></TimeBlock>
            <TimeBlock Value={days} Description='ZILE'></TimeBlock>
            <TimeBlock Value={hours} Description='ORE'></TimeBlock>
            <TimeBlock Value={minutes} Description='MINUTE'></TimeBlock>
            <TimeBlock Value={seconds} Description='SECUNDE'></TimeBlock>
        </div>
    );
}