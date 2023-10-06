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
        const target = moment('2024-06-08T12:00:00');
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
            <TimeBlock Value={months} Description='MONTHS'></TimeBlock>
            <TimeBlock Value={days} Description='DAYS'></TimeBlock>
            <TimeBlock Value={hours} Description='HOURS'></TimeBlock>
            <TimeBlock Value={minutes} Description='MINUTES'></TimeBlock>
            <TimeBlock Value={seconds} Description='SECONDS'></TimeBlock>
        </div>
    );
}