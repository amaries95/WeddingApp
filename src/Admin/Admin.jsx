import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminView from "./AdminView/AdminView";

export default function Admin(){
    var navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isAuth'))
        {
            var expirationDate = new Date(localStorage.getItem('expirationToken') *1000);
            var currentDate = new Date();

            console.log("exp", expirationDate);
            console.log("current", currentDate);
            console.log(currentDate >= expirationDate);

            if(currentDate >= expirationDate)
            {
                logout();
                return;
            }
            else {
                setIsLoggedIn(localStorage.getItem('isAuth'));
            }
        }
        else{
            logout();
        }
    }, [navigate]);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <>
            {isLoggedIn && <AdminView logoutProp={logout}></AdminView>}
        </>
    );
}