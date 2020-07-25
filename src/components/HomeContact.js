import React from "react";
import decoration from "../assets/decoration.svg";
import {HomeFooter} from "./HomeFooter";

export const HomeContact = () => {

    const sendForm = () => {}

    return (
        <>
            <section className='contact row' id='contact'>

                <div className='col-7 contact__column' />
                <div className='col-5 contact__column'>
                    <h2 className='contact__title'>
                        Skontaktuj się z nami
                    </h2>
                    <img src={decoration} className='contact__deco' alt='Dekoracja' />

                    {/* <p>{successMessage}</p> */}

                    <form className='contact__form'>
                        <div className='contact__form-inputs'>
                            <label className='contact__form-label'>
                                Wpisz swoje imię
                                <input
                                    className='contact__form-input'
                                    type='text'
                                    placeholder='Imię'
                                    required
                                />
                            </label>
                            <label className='contact__form-label'>
                                Wpisz swój emali
                                <input
                                    className='contact__form-input'
                                    type='email'
                                    placeholder='abc.xyz.com'
                                    required
                                />
                            </label>
                        </div>

                        <label className='contact__form-label'>
                            Wpisz swoją wiadomość
                            <textarea
                                className='contact__form-input'
                                required
                                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </label>

                        <button className='contact__form-btn' onSubmit={sendForm}>
                            Wyślij
                        </button>

                    </form>
                </div>

                <HomeFooter />

            </section>
        </>
    );
}