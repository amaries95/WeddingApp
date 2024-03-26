import style from "./SplitLine.module.css";

export default function SplitLine() {
    return (
        <div className={style["split-line-container"]}>
            <div className={style['circle']}>
                <span></span>
            </div>
            <div className={style['line']}>
                
            </div>
        </div>
    );
}