import React from "react";
import {Header} from "../Header";
import formHeroImg from "../../assets/form-hero-img.jpg";
import decoration from "../../assets/decoration.svg";

export const FormHero = () => {

    return (
        <section className='formHero row'>

            <div className='col-6 formHero__image'>
                <img src={formHeroImg} alt='Background with sweater' />
            </div>

            <div className='col-6 formHero__content'>
                <Header />

                <div className='formHero__start'>
                    <h2
                        className='formHero__start-title'
                        style={ {fontWeight: '400'} }
                    >
                        Oddaj rzeczy, których już nie chcesz
                        <br/>
                        POTRZEBUJĄCYM
                    </h2>
                    <img
                        className='formHero__start-deco'
                        src={decoration}
                        alt='Decoration'
                    />
                    <h3 className='formHero__start-title'>
                        Wystarczą 4 proste kroki:
                    </h3>

                    <ul className='formHero__steps'>
                        <li className='formHero__steps-box'>
                            <div className='formHero__steps-box--text'>
                                <h4>1</h4>
                                <p>
                                    Wybierz<br/>rzeczy
                                </p>
                            </div>
                        </li>
                        <li className='formHero__steps-box'>
                            <div className='formHero__steps-box--text'>
                                <h4>2</h4>
                                <p>
                                    Spakuj je<br/>w worki
                                </p>
                            </div>
                        </li>
                        <li className='formHero__steps-box'>
                            <div className='formHero__steps-box--text'>
                                <h4>3</h4>
                                <p>
                                    Wybierz<br/>fundację
                                </p>
                            </div>
                        </li>
                        <li className='formHero__steps-box'>
                            <div className='formHero__steps-box--text'>
                                <h4>4</h4>
                                <p>
                                    Zamów<br/>kuriera
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

        </section>
    );
}