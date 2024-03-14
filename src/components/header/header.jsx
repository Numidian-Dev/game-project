"use client"
import React, { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";
import Wallet from './wallet';

const Header = () => {
    const [show, setShow] = useState()
    const display = { display: show }
    return (
        <header>
            <div className="logo">Logo</div>
            <div onClick={() => setShow("flex")} className="openMenu">
                <FaBars />
            </div>

            <nav style={display}>
                <div onClick={() => setShow("none")} className="closeMenu"><FaXmark /></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Gameplay</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
                <div className="wallet-mobile">
                    <Wallet />
                </div>
            </nav>
            <div className="wallet-desktop">
                <Wallet />
            </div>
        </header>
    );
}

export default Header;
