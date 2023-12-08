import style from './InvitationForm.module.css';
import { useRef, useState } from 'react';
import { Host, NewGuest, Https, Post } from '../../Shared/UrlConstants';
import { IoCall } from 'react-icons/io5';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function InvitationForm () {
    var nameRef = useRef(null);
    var nbrPersonRef = useRef(null);
    var veggieMenusRef = useRef(null);
    var otherDetailsRef = useState(null);

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
            setValidationMessage("Va rugam sa completati toate campurile.");
            return;
        }

            setIsLoading(true);

            await fetch(Https + Host + NewGuest,
                {
                    method: Post,
                    body: JSON.stringify({
                    name: nameRef.current.value,
                    numberOfGuests: nbrPersonRef.current.value,
                    numberOfVeggiesMenus: veggieMenusRef.current.value,
                    otherDetails: otherDetailsRef.current.value
                }),
                headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Host': Host,
                },
            }, {mode:'cors'})
            .then((response) => {
                if(response.ok)
                {
                    setValidationSuccessMessage("Va Multumim! 😊");
                }
                else {
                    setValidationMessage("Something went wrong");
                }

                setIsLoading(false);
            })
            .catch((error) => {
                setValidationMessage("Something went wrong");
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
                        <input type='text' ref={node => veggieMenusRef.current = node} placeholder='Meniu dorit (ex: 1x normal, 2x vegan)'></input>
                    </div>
                    <div className={style['textarea-container']}>
                        <textarea type='text' ref={node => otherDetailsRef.current = node} placeholder='Alte detalii'></textarea>
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
                            {!isLoading && 'Participa'}
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
                        <a href='tel: +40751437972'>
                            <IoCall></IoCall>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='https://www.facebook.com/alexandru.maries28'>
                            <BsFacebook></BsFacebook>
                        </a>
                    </div>
                    <div className={style['social-element']}>
                        <a href='https://www.instagram.com/alexandru.maries28/'>
                            <BsInstagram></BsInstagram>
                        </a>
                    </div>
                </div>
                <div className={style['rights-container']}>
                    <p>© 2023 Alexandrii's Wedding. All Rights Reserved. Made with ❤ by Alex Maries.</p>
                </div>
            </div>
        </div>
    );
} 