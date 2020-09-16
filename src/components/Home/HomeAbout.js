import React from "react";
import decoration from "../../assets/decoration.svg";
import signature from "../../assets/signature.svg"

export const HomeAbout = () => {

    return (
        <section className='about row' id='about'>

            <div className='col-6'>
                <h2 className='about__title'>
                    O nas
                </h2>
                <img
                    className='about__deco'
                    src={decoration}
                    alt='Decoration'
                />
                <p className='about__text'>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img
                    className='about__signature'
                    src={signature}
                    alt='Signature'
                />
            </div>

            <div className='col-6 about__photo' />

        </section>
    );
}