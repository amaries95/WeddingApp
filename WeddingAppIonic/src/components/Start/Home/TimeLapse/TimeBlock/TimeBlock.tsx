import style from './TimeBlock.module.css';

interface TimeBlockProps {
    Value: string;
    Description: string;
  }

export default function TimeBlock(props:TimeBlockProps) {
    return (
        <div className={style['time-block-container']}>
            <span>{props.Value}</span>
            <p>{props.Description}</p>
        </div>
    );
}