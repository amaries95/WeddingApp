import TimeBlock from './TimeBlock/TimeBlock';
import style from './TimeLapse.module.css';

export default function TimeLapse () {
    var startTime = new Date();
    debugger;

    return (
        <div className={style['time-lapse-container']}>
            <TimeBlock Value='89' Description='days'></TimeBlock>
            <TimeBlock Value='89' Description='days'></TimeBlock>
            <TimeBlock Value='89' Description='days'></TimeBlock>
            <TimeBlock Value='89' Description='days'></TimeBlock>
            <TimeBlock Value='89' Description='days'></TimeBlock>

        </div>
    );
}