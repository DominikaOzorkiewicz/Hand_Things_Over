import React from "react";
import formHeroImg from "../../assets/form-hero-img.jpg";
import {HomeHeader} from "../Home/HomeHeader";
import decoration from "../../assets/decoration.svg";

export const FormHero = () => {

    return (
        <section className='form row'>

            <div className='col-6 form__image'>
                <img src={formHeroImg} alt='Form Hero'/>
            </div>

            <div className='col-6 form__content'>
                <HomeHeader/>

                <div className='form__start'>
                    <h2 className='form__start-title'>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                    <img className='form__start-deco' src={decoration} alt='Decoration'/>
                    <h3 className='form__start-title'>Wystarczą 4 proste kroki:</h3>

                    <ul className='form__steps'>
                        <li className='form__steps-box'>
                            <div className='form__steps-box--text'>
                                <h4>1</h4>
                                <p>Wybierz<br/>rzeczy</p>
                            </div>
                        </li>

                        <li className='form__steps-box'>
                            <div className='form__steps-box--text'>
                                <h4>2</h4>
                                <p>Spakuj je<br/>w worki</p>
                            </div>
                        </li>

                        <li className='form__steps-box'>
                            <div className='form__steps-box--text'>
                                <h4>3</h4>
                                <p>Wybierz<br/>fundację</p>
                            </div>
                        </li>

                        <li className='form__steps-box'>
                            <div className='form__steps-box--text'>
                                <h4>4</h4>
                                <p>Zamów<br/>kuriera</p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

        </section>
    );
}