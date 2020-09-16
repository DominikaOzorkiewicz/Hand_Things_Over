import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/src";
import { auth } from "../services/firebase";
import * as firebase from "firebase";

export const Header = () => {
    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        if (auth().currentUser !== null) {
            setLoggedUser(auth().currentUser.email)
        }
    },[]);

    const handleLogOut = () => {
    firebase.then(r => auth().signOut())
        localStorage.clear();
        console.log('Użytkownik został wylogowany');
    }

    return (
        <header className='header' id='header'>

            {loggedUser.length > 1 ? (
                <div className='header__user'>
                    <div className='header__user-link header__user--email'>
                        Witaj {loggedUser}!
                    </div>
                    <Link
                        to='/oddaj-rzeczy'
                        className='header__user-link header__user--donate'
                    >
                        Oddaj rzeczy
                    </Link>
                    <Link
                        to='/logout'
                        className='header__user-link header__user--logout'
                        onClick={handleLogOut}
                    >
                        Wyloguj
                    </Link>
                </div>
            ) : (
                <div className='header__user'>
                    <Link to='/login' className='header__user-link'>
                        Zaloguj
                    </Link>
                    <Link to='/register' className='header__user-link'>
                        Załóż konto
                    </Link>
                </div>
            )}

            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__list-el'>
                        <HashLink smooth to='/' className='nav__list-link'>
                            Start
                        </HashLink>
                    </li>
                    <li className='nav__list-el'>
                        <HashLink smooth to='/#simpleSteps' className='nav__list-link'>
                            O co chodzi?
                        </HashLink>
                    </li>
                    <li className='nav__list-el'>
                        <HashLink smooth to='/#about' className='nav__list-link'>
                            O nas
                        </HashLink>
                    </li>
                    <li className='nav__list-el'>
                        <HashLink smooth to='/#organizations' className='nav__list-link'>
                            Fundacja i organizacje
                        </HashLink>
                    </li>
                    <li className='nav__list-el'>
                        <HashLink smooth to='/#contact' className='nav__list-link'>
                            Kontakt
                        </HashLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}