import style from './InvitationForm.module.css';
import { useRef, useState } from 'react';

export default function InvitationForm () {
    var yesCheckbox = useRef(null);
    var noCheckbox = useRef(null);
    var nameRef = useRef(null);
    var nbrPersonRef = useRef(null);
    var veggieMenusRef = useRef(null);
    var otherDetailsRef = useState(null);

    const [isShownFormDetails, setIsShownFormDetails] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();

        
    }

    const onYesCheckboxSelected = (event) => {
        const state = event.currentTarget.checked;

        noCheckbox.current.checked = !state;
        setIsShownFormDetails(state);
    }

    const onNoCheckboxSelected = (event) => {
        const state = event.currentTarget.checked;

        yesCheckbox.current.checked = !state;
        setIsShownFormDetails(!state);
    }

    return (
        <div className={style['container']}>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Partikipi?</label>
                </div>
                <div>
                    <label>Nume</label>
                    <input type='text' ref={nameRef}></input>
                </div>
                <label>Confirmi participarea?</label>
                <div>
                    <input type="checkbox" id="checkboxDA" onChange={onYesCheckboxSelected} ref={yesCheckbox}/>
                    <label htmlFor="checkboxDA">Da</label>
                </div>
                <div>
                    <input type="checkbox" id="checkboxNU" onChange={onNoCheckboxSelected} ref={noCheckbox}/>
                    <label htmlFor="checkboxNU">Nu</label>
                </div>
                {isShownFormDetails && <div>
                    <div>
                        <label>Numar de persoane</label>
                        <input type='number' ref={nbrPersonRef}></input>
                    </div>
                    <div>
                        <label>numar Meniuri vegetariene</label>
                        <input type='number' ref={veggieMenusRef}></input>
                    </div>
                    <div>
                        <label>Other details</label>
                        <input type='text' ref={otherDetailsRef}></input>
                    </div>
                </div>}
                <button>Trimite</button>
            </form>
        </div>
    );
} 