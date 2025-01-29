import style from './InvitationForm.module.css';
import { useRef, useState } from 'react';
import { Host, NewGuest, Https, Post } from '../../Shared/UrlConstants';
import { IoCall } from 'react-icons/io5';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function InvitationForm () {
    var nameRef = useRef(null);
    var nbrPersonRef = useRef(null);
    var veggieMenusRef = useRef(null);
    var otherDetailsRef = useRef(null);

    const [isShownFormDetails, setIsShownFormDetails] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [validationSuccessMessage, setValidationSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }

    const submitForm = async () => {
        setValidationSuccessMessage("");
        setValidationMessage("");

        if(!(checkIfNotNullOrEmpty(nameRef)
        && checkIfNotNullOrEmpty(nbrPersonRef)
        && checkIfNotNullOrEmpty(veggieMenusRef)))
        {
            setValidationMessage("Vă rugăm să completați toate câmpurile.");
            return;
        }

            setIsLoading(true);

            await fetch(Https + Host + NewGuest,
                {
                    method: Post,
                    body: JSON.stringify({
                    name: nameRef.current.value,
                    numberOfGuests: nbrPersonRef.current.value,
                    typesOfMenu: veggieMenusRef.current.value,
                    otherDetails: otherDetailsRef.current.value
                }),
                headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Host': Host,
                },
            })
            .then((response) => {
                if(response.ok)
                {
                    setValidationSuccessMessage("Vă Mulțumim! 😊");
                    clearTheForm();
                }
                else {
                    setValidationMessage("Ceva nu funcționează. Luati legătura cu Alex Mărieș");
                }

                setIsLoading(false);
            })
            .catch((error) => {
                setValidationMessage("Ceva nu funcționează. Luati legătura cu Alex Mărieș");
                setIsLoading(false);
            });
    }

    const checkIfNotNullOrEmpty = (field) => {
        if(field !== null)
        {
            var value = field.current.value;
            return !(value === null || value.toString() === "");
        }
    }
    
    function clearTheForm() {
        nameRef.current.value = null;
        nbrPersonRef.current.value = null;
        veggieMenusRef.current.value = null;
        otherDetailsRef.current.value = null;
    }

    return (
        <div className={style['container']}>
            <div className={style['form-container']}>
                <div className={style['welcome-text']}>
                    <p>Vă așteptăm cu drag!</p>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className={style['input-style']}>
                        <input type='text' ref={nameRef} placeholder='Nume invitați'></input>
                    </div>
                    <div className={style['input-style']}>
                        <input type='number' ref={node => nbrPersonRef.current = node} placeholder='Număr persoane'></input>
                    </div>
                    <div className={style['input-style']}>
                        <input type='text' ref={node => veggieMenusRef.current = node} placeholder='Meniu dorit (ex: 1x normal, 2x vegan)'></input>
                    </div>
                    <div className={style['textarea-container']}>
                        <textarea type='text' ref={node => otherDetailsRef.current = node} placeholder='Alte detalii (ex: ajutor cu cazarea, alergeni, meniu special - fara porc etc.)'></textarea>
                    </div>
                    <div className={style['validation-messsage']}>
                        {validationMessage && 
                        <p>{validationMessage}</p>
                        }
                    </div>
                    <div className={style['validation-success-messsage']}>
                        {validationSuccessMessage && 
                        <p>{validationSuccessMessage}</p>
                        }
                    </div>
                    <div className={style['button-container']}>
                        <button>
                            {!isLoading && 'Participă'}
                            {isLoading && 
                                <div className={style['loading-container']}>
                                    <div className={style['loading-spinner']}>
                                    </div>
                                </div>
                            }
                        </button>

                    </div>
                </form>
            </div>
            <div className={style['footer-container']}>
                <div className={style['social-container']}>
                    <div className={style['social-element']}>
                        <a href='tel: +40730663540'>
                            <IoCall></IoCall>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='https://www.facebook.com/anton.terezia/'>
                            <BsFacebook></BsFacebook>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='https://www.instagram.com/mitza.olar/'>
                            <BsInstagram></BsInstagram>
                        </a>
                    </div>
                </div>
                <div className={style['rights-container']}>
                    <p>© 2023 Alexandrii's Wedding. All Rights Reserved. Made with ❤ by Alex Mărieș.</p>
                </div>
            </div>
        </div>
    );
} 