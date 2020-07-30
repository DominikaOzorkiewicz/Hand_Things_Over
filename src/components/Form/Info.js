import React from "react";

export const Info = () => {
    // info__text will depend on the specific step

    return (
        <section className='info'>
            <h3 className='info__title'>
                Ważne!
            </h3>
            <p className='info__text'>
                Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
            </p>
        </section>
    );
}