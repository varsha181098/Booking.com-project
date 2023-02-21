import React from 'react'
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

export default function Navbar({ type }) {

    const regis = useNavigate();
    const Lgot = useNavigate();
    const lgIn = useNavigate();
    const checkOt = useNavigate();

    const handelCheckOut = () => {
        checkOt("/checkout");
    }


    const handelRegis = () => {
        regis("/register");
    }

    const handelLogIn = () => {
        lgIn("/Login");
    }

    const handelLogout = () => {
        localStorage.clear("userDetails");
        Lgot("/register");
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Welcome to BOOKING.COM</span>
                <div className="navItems">
                    {type !== "logOut" ? <>
                        <button className="navButton" onClick={handelRegis}>Register</button>
                        <button className="navButton" onClick={handelLogIn}>Login</button>
                    </>
                        :
                        <>

                            <button className="navButton" onClick={handelLogout}>Logout</button>
                            <button className="navButton" onClick={handelCheckOut}>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
