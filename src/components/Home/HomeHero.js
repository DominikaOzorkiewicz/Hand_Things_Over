import React, {useEffect, useState} from "react";
import {HomeHeader} from "./HomeHeader";
import heroImg from "../../assets/hero-img.jpg";
import decoration from "../../assets/decoration.svg";
import {Link} from "react-router-dom";
import {auth} from "../../services/firebase";

export const HomeHero = () => {
    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        if (auth().currentUser !== null) {
            setLoggedUser(auth().currentUser.email)
        }
    },[]);

    return (
        <section className='hero row'>

            <div className='col-6 hero__image'>
                <img src={heroImg} alt='Hero' />
            </div>

            <div className='col-6 hero__content'>
                <HomeHeader />

                <div className='hero__welcome'>
                    <h1 className='hero__welcome-title'>
                        Zacznij pomagać!
                    </h1>
                    <h2 className='hero__welcome-title'>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h2>
                    <img className='hero__welcome-deco' src={decoration} alt='Decoration' />
                    <div className='hero__welcome-buttons'>
                        {loggedUser.length > 1 ? (
                            <Link className='hero__welcome-buttons--item btn' to='/oddaj-rzeczy'>
                                Oddaj<br/>rzeczy
                            </Link>
                        ) : (
                            <Link className='hero__welcome-buttons--item btn' to='/login'>
                                Oddaj<br/>rzeczy
                            </Link>
                        )}
                        <Link className='hero__welcome-buttons--item btn' to='/'>
                            Zorganizuj<br/>zbiórkę
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}