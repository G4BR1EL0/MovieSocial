import React from "react";
import './Footer.scss';
import {GoMarkGithub} from 'react-icons/go';
import {AiFillLinkedin} from 'react-icons/ai';

export function Footer(){

    return(       
        <div className="footer"> 
            <div className="cntFooter">
                <span>Made by Gabriel Abarca</span>
            </div>
            <div className="enlaces">
                <a href="https://github.com/G4BR1EL0/SocialCinema" target="_blank">
                    <GoMarkGithub/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-fullstack/" target="_blank">
                    <AiFillLinkedin/>
                </a>
            </div>
        </div>
    )
}
