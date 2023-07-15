import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Host, Https, Post, UserLogin} from './../Shared/UrlConstants';
import React from 'react';
import { decodeToken } from 'react-jwt';

export default function Login () {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    var [responseMessage, setResponseMessage] = useState(null);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (!enteredUsername && !enteredPassword )
        {
            return;
        }

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
            setResponseMessage(responseJson.message);
        }
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input type='text' ref={usernameInputRef}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' ref={passwordInputRef}></input>
                </div>
                <button>Login</button>
                {responseMessage && <label>{responseMessage}</label>}
            </form>
        </>
    );
} 