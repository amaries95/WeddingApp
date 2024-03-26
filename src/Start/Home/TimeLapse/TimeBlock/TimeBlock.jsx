import style from './TimeBlock.module.css';

export default function TimeBlock(props) {
    return (
        <div className={style['time-block-container']}>
            <span>{props.Value}</span>
            <p>{props.Description}</p>
        </div>
    );
}