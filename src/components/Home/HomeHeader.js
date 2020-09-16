import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { auth } from "../../services/firebase";

export const HomeHeader = () => {
    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        if (auth().currentUser !== null) {
            setLoggedUser(auth().currentUser.email)
        }
    },[]);

    return (
        <header className='header' id='header'>

            {loggedUser.length > 1 ? (
                <div className='header__user'>
                    <div className='header__user-link header__user--email'>
                        Witaj {loggedUser}!
                    </div>
                    <Link to='/oddaj-rzeczy' className='header__user-link header__user--donate'>
                        Oddaj rzeczy
                    </Link>
                    <Link to='/logout' className='header__user-link header__user--logout'
                          onClick={() => auth().signOut()}>
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
                        <ScrollLink
                            activeClass='active'
                            to='header'
                            className='nav__list-link'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                            onClick={() => scroll.scrollToTop()}>
                            Start
                        </ScrollLink>
                    </li>
                    <li className='nav__list-el'>
                        <ScrollLink
                            activeClass='active'
                            to='simpleSteps'
                            className='nav__list-link'
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            O co chodzi?
                        </ScrollLink>
                    </li>
                    <li className='nav__list-el'>
                        <ScrollLink
                            activeClass='active'
                            to='about'
                            className='nav__list-link'
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            O nas
                        </ScrollLink>
                    </li>
                    <li className='nav__list-el'>
                        <ScrollLink
                            activeClass='active'
                            to='organizations'
                            className='nav__list-link'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}>
                            Fundacja i organizacje
                        </ScrollLink>
                    </li>
                    <li className='nav__list-el'>
                        <ScrollLink
                            activeClass='active'
                            to='contact'
                            className='nav__list-link'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}>
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}