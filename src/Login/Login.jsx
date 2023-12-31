import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Host, Https, Post, UserLogin} from './../Shared/UrlConstants';
import React from 'react';
import { decodeToken } from 'react-jwt';
import style from './Login.module.css';

export default function Login () {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    var [responseMessage, setResponseMessage] = useState(null);
    var [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (!enteredUsername && !enteredPassword )
        {
            return;
        }

        setIsLoading(true);
        var response = await fetch(Https + Host + UserLogin,
        {
            method: Post,
            body: JSON.stringify({
                userName: enteredUsername,
                password: enteredPassword
            }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': Host,
            }
        });

        var responseJson = await response.json();

        if(await response.status === 200)
        {
            setIsLoading(false);
            if(responseJson.data != null)
            {
                localStorage.setItem('token', responseJson.data);
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('expirationToken', decodeToken(responseJson.data).exp);
                
                navigate("/admin");
            }
            else {
                setResponseMessage(responseJson.result.message);
            }
        }
        else {
            setIsLoading(false);
            setResponseMessage(responseJson.message);
        }
    }

    return (
        <div className={style['container']}>
            <div className={style['login-container']}>
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type='text' ref={usernameInputRef} placeholder='username'></input>
                    </div>
                    <div>
                        <input type='password' ref={passwordInputRef} placeholder='password'></input>
                    </div>
                    <button>
                    {!isLoading && 'Login'}
                        {isLoading && 
                            <div className={style['loading-container']}>
                                <div className={style['loading-spinner']}>
                                </div>
                            </div>
                        }
                    </button>
                    {responseMessage && <label>{responseMessage}</label>}
                </form>
            </div>
        </div>
    );
} 