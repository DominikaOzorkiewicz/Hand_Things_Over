import React from "react";
import decoration from "../../assets/decoration.svg"

export const ThankYou = () => {

    return (
        <section>
            <div className='col-12 thankYou'>
                <h3 className='thankYou__title'>
                    Dziękujemy za przesłanie formularza.<br/>
                    Na maila prześlemy wszelkie<br/>
                    informacje o odbiorze.
                </h3>
                <img
                    className='thankYou__deco'
                    src={decoration}
                    alt='Decoration'
                />
            </div>
        </section>
    );
}