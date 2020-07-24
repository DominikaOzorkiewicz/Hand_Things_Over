import React from "react";
import decoration from "../assets/decoration.svg";
import {HomeFooter} from "./HomeFooter";

export const HomeContact = () => {

    const sendForm = () => {}

    return (
        <>
            <section className='contact' id='contact'>
                <div className='row'>

                    <div className='col-7'/>

                    <div className='col-5 contact__content'>

                        <div className='row row--title'>
                            <h2 className='contact__content-title'>
                                Skontaktuj się z nami
                            </h2>
                            <img className='contact__deco' src={decoration} alt='Decoration'/>
                            {/* <p>{successMessage}</p> */}
                        </div>

                        <form className='contact__form' onSubmit={sendForm}>
                            <div className='row contact__form-row--inputs'>
                                <div>
                                    <label className='contact__form-label'>Wpisz swoje imię</label>
                                    <input type='text' className='contact__form-input' placeholder='Imię' required={true}/>
                                </div>

                                <div>
                                    <label className='contact__form-label'>Wpisz swój email</label>
                                    <input type='email' className='contact__form-input' placeholder='abc@xyz.com' required={true}/>
                                </div>
                            </div>

                            <div className='row contact__form-row--textarea'>
                                <label className='contact__form-label'>Wpisz swoją wiadomość</label>
                                <textarea className='contact__form-textarea' required={true} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                                {/* <p>{errorMessage}</p> */}
                            </div>

                            <button className='contact__form-button btn'>Wyślij</button>

                        </form>

                    </div>

                </div>

                <div className='row'>
                    <HomeFooter/>
                </div>

            </section>
        </>

    );
}