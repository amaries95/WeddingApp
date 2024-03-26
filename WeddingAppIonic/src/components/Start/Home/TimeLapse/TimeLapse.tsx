import { useEffect, useState, useRef } from 'react';
import TimeBlock from './TimeBlock/TimeBlock';
import style from './TimeLapse.module.css';
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
            setSeconds(remainingTime.seconds());
            setMinutes(remainingTime.minutes());
            setHours(remainingTime.hours());
            setDays(remainingTime.days());
            setMonths(remainingTime.months());

        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={style['time-lapse-container']}>
            <TimeBlock Value={months.toString()} Description='LUNI'></TimeBlock>
            <TimeBlock Value={days.toString()} Description='ZILE'></TimeBlock>
            <TimeBlock Value={hours.toString()} Description='ORE'></TimeBlock>
            <TimeBlock Value={minutes.toString()} Description='MINUTE'></TimeBlock>
            <TimeBlock Value={seconds.toString()} Description='SECUNDE'></TimeBlock>
        </div>
    );
}