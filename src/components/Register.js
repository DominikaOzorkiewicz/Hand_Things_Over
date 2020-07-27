import React from "react";
import {Header} from "./Header";
import decoration from "../assets/decoration.svg";
import {Link} from "react-router-dom";

export const Register = () => {

    const handleRegister = () => {}

    return (
        <div className='register'>

            <div className='row'>
                <div className='col-6' />
                <div className='col-6' style={ {paddingRight: "120px"} }>
                    <Header />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 register__column'>
                    <div className='register__title'>Załóż konto</div>
                    <img className='register__deco' src={decoration} alt='Dekoracja' />

                    <form className='register__form'>
                        <div className='register__form-inputs'>
                            <label className='register__form-label'>
                                Email
                                <input
                                    className='register__form-input'
                                    type='email'
                                    required
                                />
                            </label>
                            <label className='register__form-label'>
                                Hasło
                                <input
                                    className='register__form-input'
                                    type='password'
                                    required
                                />
                            </label>
                            <label className='register__form-label'>
                                Powtórz hasło
                                <input
                                    className='register__form-input'
                                    type='password'
                                    required
                                />
                            </label>
                        </div>

                        <div style={ {width: '500px', display: 'flex', justifyContent: 'space-between', marginTop: '40px'} }>
                            <Link to='/login' className='header__user-link'>
                                Zaloguj się
                            </Link>
                            <button className='header__user-link register__button' onSubmit={handleRegister}>
                                Załóż konto
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}