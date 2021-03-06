import React, {useState} from "react";
import {Header} from "./Header";
import decoration from "../assets/decoration.svg";
import {Link, useHistory} from "react-router-dom";
import firebase from "../services/firebase";

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        id: Math.random().toString(36).substr(2, 9)
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const history = useHistory();

    const handleChangeData = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState, [name]: value
        }));
    }

    const handleRegister = (event) => {
        event.preventDefault();
        let passed = true;

        if (!user.email.match(/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            || user.email.length < 2) {
            setEmailError('Podany email jest nieprawidłowy');
            passed = false;
        } else {
            setEmailError('');
        }

        if (user.password.length < 6) {
            setPasswordError('Podane hasło jest za krótkie');
            passed = false;
        } else {
            setPasswordError('');
        }

        if (user.password !== user.password_confirmation) {
            setPasswordConfirmationError('Hasła nie są zgodne');
            passed = false;
        } else {
            setPasswordConfirmationError('');
        }

        if (passed === true) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((user) => {
                    history.push('/login');
                })
                .catch((error) => {
                    setRegisterError(error.message);
                    console.log(error.message);
                });
            console.log('Użytkownik zarejestrowany');
        }
    }

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
                    <div className='register__title'>
                        Załóż konto
                    </div>
                    <img className='register__deco' src={decoration} alt='Dekoracja' />

                    {registerError.length > 0 ? (
                        <p className='error__message'>
                            {registerError}
                        </p>
                    ) : (
                        <p className='error__message' hidden>
                            {registerError}
                        </p>
                    )}

                    <form
                        className='register__form'
                        onSubmit={handleRegister}
                    >
                        <div className='register__form-inputs'>
                            <label className='register__form-label'>
                                Email
                                <input
                                    className='register__form-input'
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    onChange={handleChangeData}
                                    required
                                />
                                {emailError.length > 0 ? (
                                    <p className='error'>
                                        {emailError}
                                    </p>
                                ) : (
                                    <p className='error' hidden>
                                        {emailError}
                                    </p>
                                )}
                            </label>
                            <label className='register__form-label'>
                                Hasło
                                <input
                                    className='register__form-input'
                                    type='password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleChangeData}
                                    required
                                />
                                {passwordError.length > 0 ? (
                                    <p className='error'>
                                        {passwordError}
                                    </p>
                                ) : (
                                    <p className='error' hidden>
                                        {passwordError}
                                    </p>
                                )}
                            </label>
                            <label className='register__form-label'>
                                Powtórz hasło
                                <input
                                    className='register__form-input'
                                    type='password'
                                    name='password_confirmation'
                                    value={user.password_confirmation}
                                    onChange={handleChangeData}
                                    required
                                />
                                {passwordConfirmationError.length > 0 ? (
                                    <p className='error'>
                                        {passwordConfirmationError}
                                    </p>
                                ) : (
                                    <p className='error' hidden>
                                        {passwordConfirmationError}
                                    </p>
                                )}
                            </label>
                        </div>

                        <div
                            style={ {width: '500px', display: 'flex', justifyContent: 'space-between', marginTop: '40px'} }
                        >
                            <Link to='/login' className='header__user-link'>
                                Zaloguj się
                            </Link>
                            <button className='header__user-link register__button' type='submit'>
                                Załóż konto
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}