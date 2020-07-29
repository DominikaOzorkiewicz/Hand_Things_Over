import React from "react";
import instagramIcon from "../../assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";

export const HomeFooter = () => {

    return (
        <div className='footer row'>

            <div className='col-4 footer__column'/>
            <div className='col-4 footer__column'>
                <small className='footer__copyright'>
                    Copyright by Coders Lab
                </small>
            </div>
            <div className='col-4 footer__column footer__socialmedia'>
                <a href="http://www.facebook.com" className="facebook-icon" title='Facebook'>
                    <img src={facebookIcon} alt='Facebook Icon'/>
                </a>
                <a href="http://www.instagram.com" className="instagram-icon" title='Instagram'>
                    <img src={instagramIcon} alt='Instagram Icon'/>
                </a>
            </div>

        </div>
    );
}