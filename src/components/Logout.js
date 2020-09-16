import React from "react";
import {Header} from "./Header";
import decoration from "../assets/decoration.svg";
import {Link} from "react-router-dom";

export const Logout = () => {

    return (
        <div className='logout'>

            <div className='row'>
                <div className='col-6' />
                <div className='col-6' style={ {paddingRight: "120px"} }>
                    <Header />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 logout__column'>
                    <div className='logout__title'>
                        Wylogowanie nastąpiło<br/>pomyślnie!
                    </div>
                    <img className='logout__deco' src={decoration} alt='Dekoracja' />
                    <Link to='/' className='header__user-link logout__button'>
                        Strona główna
                    </Link>
                </div>
            </div>

        </div>
    );
}