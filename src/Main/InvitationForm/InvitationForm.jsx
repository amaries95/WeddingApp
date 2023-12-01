import style from './InvitationForm.module.css';
import { useRef, useState } from 'react';
import { Host, NewGuest, Https, Post } from '../../Shared/UrlConstants';
import { IoCall } from 'react-icons/io5';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

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
            <div className={style['form-container']}>
                <div className={style['welcome-text']}>
                    <p>Va asteptam cu drag!</p>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className={style['input-style']}>
                        <input type='text' ref={nameRef} placeholder='Nume invitat'></input>
                    </div>
                    <div className={style['input-style']}>
                        <input type='number' ref={node => nbrPersonRef.current = node} placeholder='Numar persoane'></input>
                    </div>
                    <div className={style['input-style']}>
                        <input type='number' ref={node => veggieMenusRef.current = node} placeholder='Meniuri vegetariene'></input>
                    </div>
                    <div className={style['textarea-container']}>
                        <textarea type='text' ref={node => otherDetailsRef.current = node} placeholder='Alte detalii'></textarea>
                    </div>
                    {validationMessage && <span>{validationMessage}</span>}
                    <div className={style['button-container']}>
                        <button>Participa</button>
                    </div>
                </form>
            </div>
            <div className={style['footer-container']}>
                <div className={style['rights-container']}>
                    <p>© 2023 Alexandrii's Wedding. Design By Alex Maries. All Rights Reserved.</p>
                </div>
                <div className={style['social-container']}>
                    <div className={style['social-element']}>
                        <a href='tel: +40751437972'>
                            <IoCall></IoCall>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='tel: +40751437972'>
                            <BsFacebook></BsFacebook>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='tel: +40751437972'>
                            <BsInstagram></BsInstagram>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 