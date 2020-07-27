import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <header className='header' id='header'>

            <div className='header__user'>
                <Link to='/login' className='header__user-link'>
                    Zaloguj
                </Link>
                <Link to='/register' className='header__user-link'>
                    Załóż konto
                </Link>
            </div>

            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__list-el'>
                        <Link to='/' className='nav__list-link'>
                            Start
                        </Link>
                    </li>
                    <li className='nav__list-el'>
                        <Link to='/' className='nav__list-link'>
                            O co chodzi?
                        </Link>
                    </li>
                    <li className='nav__list-el'>
                        <Link to='/' className='nav__list-link'>
                            O nas
                        </Link>
                    </li>
                    <li className='nav__list-el'>
                        <Link to='/' className='nav__list-link'>
                            Fundacja i organizacje
                        </Link>
                    </li>
                    <li className='nav__list-el'>
                        <Link to='/' className='nav__list-link'>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}