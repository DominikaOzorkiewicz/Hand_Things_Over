import React, {useState} from "react";
import decoration from "../../assets/decoration.svg";
import {HomeFooter} from "./HomeFooter";

export const HomeContact = () => {

    const APIpath = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
    const [completeMessage, setCompleteMessage] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [status, setStatus] = useState('');

    const handleChangeData = (event) => {
        const {name, value} = event.target;
        setCompleteMessage(prevState => ({
            ...prevState, [name]: value
        }));
    }

    const sendMessage = (event) => {
        fetch(APIpath, {
            method: 'POST',
            body: JSON.stringify(completeMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status === 'success') {
                    setStatus('success')
                }
                if (data.status === 'error') {
                    setStatus('error')
                }
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (completeMessage.name.length < 2 || !completeMessage.name.match(/^[A-Za-z]+$/)) {
            setNameError('Podane imię jest nieprawidłowe!');
        } else {setNameError('')}

        if (!completeMessage.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ||
            completeMessage.email.length < 2) {
            setEmailError('Podany email jest nieprawidłowy!');
        } else {setEmailError('')}

        if (completeMessage.message.length < 120) {
            setMessageError('Wiadomość musi mieć co najmniej 120 znaków!');
        } else {setMessageError('')}

        sendMessage();
        // Reset form
        setCompleteMessage({
            name: '',
            email: '',
            message: '',
        });
    }

    return (
        <>
            <section className='contact row' id='contact'>

                <div className='col-7 contact__column' />
                <div className='col-5 contact__column'>
                    <h2 className='contact__title'>
                        Skontaktuj się z nami
                    </h2>
                    <img src={decoration} className='contact__deco' alt='Dekoracja' />

                    { status === 'success' ?
                        <div className='success__message'>
                            <p>Wiadomość została wysłana!</p>
                            <p>Wkrótce się skontaktujemy!</p>
                        </div>
                        :
                        <div className='success__message'>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                    }

                    <form className='contact__form' onSubmit={handleSubmit}>
                        <div className='contact__form-inputs'>
                            <label className='contact__form-label'>
                                Wpisz swoje imię
                                <input
                                    className='contact__form-input'
                                    type='text'
                                    name={'name'}
                                    value={completeMessage.name}
                                    onChange={handleChangeData}
                                    placeholder='Imię'
                                />
                                { nameError.length > 0 ?
                                    <p className='error'>
                                        {nameError}
                                    </p>
                                    :
                                    <p className='error' hidden={true}>
                                        {nameError}
                                    </p>
                                }
                            </label>

                            <label className='contact__form-label'>
                                Wpisz swój emali
                                <input
                                    className='contact__form-input'
                                    type='email'
                                    name={'email'}
                                    value={completeMessage.email}
                                    onChange={handleChangeData}
                                    placeholder='abc.xyz.com'
                                />
                                { emailError.length > 0 ?
                                    <p className='error'>
                                        {emailError}
                                    </p>
                                    :
                                    <p className='error' hidden={true}>
                                        {emailError}
                                    </p>
                                }
                            </label>

                        </div>

                        <label className='contact__form-label' style={ {marginTop: '40px'} }>
                            Wpisz swoją wiadomość
                        </label>
                            <textarea
                                className='contact__form-input'
                                name={'message'}
                                value={completeMessage.message}
                                onChange={handleChangeData}
                                rows={5}
                                cols={10}
                                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        { messageError.length > 0 ?
                            <p className='error'>
                                {messageError}
                            </p>
                            :
                            <p className='error' hidden={true}>
                                {messageError}
                            </p>
                        }

                        <button className='contact__form-btn' type='submit'>
                            Wyślij
                        </button>

                    </form>
                </div>

                <HomeFooter />

            </section>
        </>
    );
}