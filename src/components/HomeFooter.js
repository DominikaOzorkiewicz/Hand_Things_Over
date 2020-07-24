import React from "react";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

export const HomeFooter = () => {

    return (
        <div className='footer row'>

            <div className='col-4'/>
            <div className='col-4'>
                <small className='footer__copyright'>
                    Copyright by Coders Lab
                </small>
            </div>
            <div className='col-4 footer__socialmedia'>
                <a href="http://www.facebook.com" className="facebook-icon">
                    <img src={facebookIcon} alt='Facebook Icon'/>
                </a>
                <a href="http://www.instagram.com" className="instagram-icon">
                    <img src={instagramIcon} alt='Instagram Icon'/>
                </a>
            </div>

        </div>
    );
}