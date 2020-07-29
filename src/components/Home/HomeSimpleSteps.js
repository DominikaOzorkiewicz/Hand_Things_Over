import React from "react";
import decoration from "../../assets/decoration.svg";
import pickIcon from "../../assets/icon-1.svg";
import packIcon from "../../assets/icon-2.svg";
import searchIcon from "../../assets/icon-3.svg";
import pickupIcon from "../../assets/icon-4.svg";
import {Link} from "react-router-dom";

export const HomeSimpleSteps = () => {

    return (
        <section className='simpleSteps' id='simpleSteps'>

            <div className='row'>
                <div className='col-12 simpleSteps__title'>
                    <h2>Wystarczą 4 proste kroki</h2>
                </div>
                <img className='simpleSteps__deco' src={decoration} alt='Decoration'/>
            </div>

            <div className='row'>
                <div className='col-2 simpleSteps__box'>
                    <img src={pickIcon} alt='T-shirt Icon' className='simpleSteps__box-icon'/>
                    <h5 className='simpleSteps__box-title'>Wybierz rzeczy</h5>
                    <p className='simpleSteps__box-text'>ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className='col-2 simpleSteps__box'>
                    <img src={packIcon} alt='Pack Icon' className='simpleSteps__box-icon'/>
                    <h5 className='simpleSteps__box-title'>Spakuj je</h5>
                    <p className='simpleSteps__box-text'>skorzystaj z worków na śmieci</p>
                </div>

                <div className='col-2 simpleSteps__box'>
                    <img src={searchIcon} alt='Search Icon' className='simpleSteps__box-icon'/>
                    <h5 className='simpleSteps__box-title'>Zdecyduj komu<br/>chcesz pomóc</h5>
                    <p className='simpleSteps__box-text'>wybierz zaufane miejsce</p>
                </div>

                <div className='col-2 simpleSteps__box'>
                    <img src={pickupIcon} alt='Pack Up Icon' className='simpleSteps__box-icon'/>
                    <h5 className='simpleSteps__box-title'>Zamów kuriera</h5>
                    <p className='simpleSteps__box-text'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>

            <div className='row'>
                <Link className='simpleSteps__button btn' to='/login'>Oddaj<br/>rzeczy</Link>
            </div>

        </section>
    );
}