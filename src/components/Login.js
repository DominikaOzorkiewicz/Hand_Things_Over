import React from "react";
import {Link} from "react-router-dom";
import {HomeHeader} from "./HomeHeader";
import decoration from "../assets/decoration.svg";

export const Login = () => {

    const handleLogIn = () => {}

    return (
        <div className='login'>

            <div className='row'>
                <div className='col-6' />
                <div className='col-6' style={ {paddingRight: "120px"} }>
                    <HomeHeader />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 login__column'>
                    <div className='login__title'>Zaloguj</div>
                    <img className='login__deco' src={decoration} alt='Dekoracja' />

                    <form className='login__form'>
                        <div className='login__form-inputs'>
                            <label className='login__form-label'>
                                Email
                                <input
                                    className='login__form-input'
                                    type='email'
                                    required
                                />
                            </label>
                            <label className='login__form-label'>
                                Hasło
                                <input
                                    className='login__form-input'
                                    type='password'
                                    required
                                />
                            </label>
                        </div>

                        <div style={ {width: '500px', display: 'flex', justifyContent: 'space-between', marginTop: '40px'} }>
                            <Link to='/register' className='header__user-link'>
                                Załóż konto
                            </Link>
                            <button className='header__user-link login__button' onSubmit={handleLogIn}>
                                Zaloguj
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}