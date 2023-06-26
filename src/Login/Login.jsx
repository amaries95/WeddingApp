import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from './../Store/login';
import { BaseURL, UserLogin} from './../Shared/UrlConstants';
import axios from 'axios';

export default function Login () {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const loginDispatcher = useDispatch();
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

        try {

            const response = await fetch(BaseURL + UserLogin,
                {
                  method: 'POST',
                  body: JSON.stringify({
                        userName: "string",
                        password: "string"
                  }),
                  headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': '*/*',
                    'Connection': 'keep-alive',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Headers': 'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
                  }
                });

                // axios.post(BaseURL+UserLogin, {
                //         userName: enteredUsername,
                //         password: enteredPassword
                //   }).then((res) => {
                //     var responseJson = res.json();
                // })



                if(await response.status == 200)
                {
                    var responseJson = await response.json();
        
                    if(responseJson.result.data != null)
                    {
                        loginDispatcher(loginActions.saveToken(responseJson.result.data));
                        loginDispatcher(loginActions.login());
                        navigate("/admin");
                    }
                    else {
                        setResponseMessage(responseJson.result.message);
                    }
                }
          } catch (error) {
            console.error(error);
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
            </form>
            
            {responseMessage && <label>{responseMessage}</label>}
        </>
    );
} 