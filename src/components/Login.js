import React, {useState} from "react";
import {Header} from "./Header";
import {Link, useHistory} from "react-router-dom";
import decoration from "../assets/decoration.svg";
import firebase from "../services/firebase";

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const history = useHistory();

    const handleChangeData = (event) => {
        const {name, value} = event.target;
        setUser(prevState => ({
            ...prevState, [name]: value
        }));
    }

    const handleLogIn = (event) => {
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

        if (passed === true) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((user) => {
                    localStorage.setItem('ActiveUser', JSON.stringify(user));
                    history.push('/');
                })
                .catch((error) => {
                    setLoginError(error.message);
                    console.log(error.message);
                });
            console.log('Użytkownik został zalogowany');
        }
    }

    return (
        <div className='login'>

            <div className='row'>
                <div className='col-6' />
                <div className='col-6' style={ {paddingRight: "120px"} }>
                    <Header />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 login__column'>
                    <div className='login__title'>
                        Zaloguj
                    </div>
                    <img className='login__deco' src={decoration} alt='Dekoracja' />

                    {loginError.length > 0 ? (
                        <p className='error__message'>
                            {loginError}
                        </p>
                    ) : (
                        <p className='error__message' hidden>
                            {loginError}
                        </p>
                    )}

                    <form
                        className='login__form'
                        onSubmit={handleLogIn}
                    >
                        <div className='login__form-inputs'>
                            <label className='login__form-label'>
                                Email
                                <input
                                    className='login__form-input'
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    onChange={handleChangeData}
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
                            <label className='login__form-label'>
                                Hasło
                                <input
                                    className='login__form-input'
                                    type='password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleChangeData}
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
                        </div>

                        <div
                            style={ {width: '500px', display: 'flex', justifyContent: 'space-between', marginTop: '40px'} }
                        >
                            <Link to='/register' className='header__user-link'>
                                Załóż konto
                            </Link>
                            <button className='header__user-link login__button' type='submit'>
                                Zaloguj
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}