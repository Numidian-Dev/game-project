import Link from 'next/link';
import React from 'react';
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className="container-form">
            <div className="title-section">
                <h1>Any Question ?</h1>
            </div>
            <form id="contact" action="https://formspree.io/f/xwkgvldr" method="POST">
                <div className="container-input">
                    <input type="text" name="name" id="name" placeholder="name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <textarea name="message" id="message" placeholder="Message"></textarea>
                <input type="submit" id="submit" value="Send" />
            </form>
        </section>
    );
}

export default Contact;
