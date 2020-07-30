import React from "react";

export const Info = ({ text }) => {

    return (
        <section className='info'>
            <h3 className='info__title'>
                Ważne!
            </h3>
            <p className='info__text'>
                {text}
            </p>
        </section>
    );
}