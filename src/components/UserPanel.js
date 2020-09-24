import React from "react";
import {Header} from "./Header";
import decoration from "../assets/decoration.svg";
import pickUpIcon from "../assets/truck.svg";
import donationIcon from "../assets/clothes-donation.svg";
import firebase from "firebase";

export const UserPanel = () => {

    {
        const donationInfoRef = firebase.database().ref('donations/');
        donationInfoRef.on('value', snapshot => {})
    }


    return (
        <div className='userPanel'>

            <div className='row'>
                <div className='col-6' />
                <div className='col-6' style={ {paddingRight: "120px"} }>
                    <Header />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 userPanel__column'>
                    <div className='userPanel__title'>
                        Panel Użytkownika
                    </div>
                    <img className='userPanel__deco' src={decoration} alt='Dekoracja' />
                </div>
            </div>

            <div className='userPanel__info'>


                <div className='row' style={ {width: '70%',display: 'flex', justifyContent: 'space-evenly' } }>
                    <div className='userPanel__info-single'>
                        <img className='userPanel__icon' src={pickUpIcon}/>
                        <p>Najbliższy zaplanowany odbiór:</p>
                        <p>10.04.2021 12:00</p>
                    </div>

                    <div className='userPanel__info-single'>
                        <img className='userPanel__icon' src={donationIcon}/>
                        <p>Zostało oddanych przez Ciebie już</p>
                        <p>10 worków!</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='userPanel__info-user'>
                        <div>Imię:</div>
                        <div>Email:</div>
                        <div>Adres:</div>
                        <div>Ostatnio oddane:</div>
                    </div>
                </div>

                {/*<div>Imię:</div>
                <div>Email:</div>
                <div>Adres:</div>
                <div>Ostatnio oddane:</div>*/}

            </div>

        </div>
    );
}