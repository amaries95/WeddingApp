import style from './InvitationForm.module.css';
import { useRef, useState } from 'react';
import { Host, NewGuest, Https, Post } from '../../Shared/UrlConstants';

export default function InvitationForm () {
    var yesCheckbox = useRef(null);
    var noCheckbox = useRef(null);
    var nameRef = useRef(null);
    var nbrPersonRef = useRef(null);
    var veggieMenusRef = useRef(null);
    var otherDetailsRef = useState(null);

    const [isShownFormDetails, setIsShownFormDetails] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }

    const submitForm = async () => {
        
        if(!(checkIfNotNullOrEmpty(nameRef)
        && (isCheckBoxChecked(yesCheckbox)
        || isCheckBoxChecked(noCheckbox))
        && checkIfNotNullOrEmpty(nbrPersonRef)
        && checkIfNotNullOrEmpty(veggieMenusRef)))
        {
            setValidationMessage("Va rugam sa completati toate campurile.");
            return;
        }
    
        var response = await fetch(Https + Host + NewGuest,
        {
            method: Post,
            body: JSON.stringify({
                name: nameRef.current.value,
                numberOfGuests: nbrPersonRef.current.value,
                isComing: yesCheckbox.current.checked === true ? true : false,
                numberOfVeggiesMenus: veggieMenusRef.current.value,
                otherDetails: otherDetailsRef.current.value
            }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': Host,
            }
        });

        if(await response.status === 200)
        {
            console.log("Successfully saved!");
        }
        else {
            console.log("Something went wrong. please inform Alex Maries about the error.");
            // afiseaza un thank you dragut
            // clear all the fields
        }
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

    const checkIfNotNullOrEmpty = (field) => {
        if(field !== null)
        {
            var value = field.current.value;
            return !(value === null || value.toString() === "");
        }
    }

    const isCheckBoxChecked = (field) => {
        return field.current.checked;
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
                        <input type='number' ref={node => nbrPersonRef.current = node}></input>
                    </div>
                    <div>
                        <label>numar Meniuri vegetariene</label>
                        <input type='number' ref={node => veggieMenusRef.current = node }></input>
                    </div>
                    <div>
                        <label>Other details</label>
                        <input type='text' ref={node => otherDetailsRef.current = node}></input>
                    </div>
                </div>}
                {validationMessage && <p>{validationMessage}</p>}
                <button>Trimite</button>
            </form>
        </div>
    );
} 