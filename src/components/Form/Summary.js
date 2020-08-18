import React from "react";
import clothImg from '../../assets/icon-1.svg';
import pickupImg from '../../assets/icon-4.svg'

export const Summary = () => {

    return (
        <section className='summary row'>

            <div className='col-12 summary__stuff'>
                <h5 className='summary__title'>
                    Oddajesz:
                </h5>
                <ul className='summary__stuff-list'>
                    <li className='summary__stuff-list-el'>
                        <img
                            src={clothImg}
                            className='summary__img'
                            alt='T-shirt'
                        />
                        <p>{} worki, {}, {}</p>
                    </li>
                    <li className='summary__stuff-list-el'>
                        <img
                            src={pickupImg}
                            className='summary__img'
                            alt='Arrow Circle'
                        />
                        <p>dla lokalizacji: {}</p>
                    </li>
                </ul>
            </div>

            <div className='summary__pickup row'>
                <div className='col-6 summary__pickup--address'>
                    <h5 className='summary__title'>
                        Adres odbioru:
                    </h5>
                    <ul className='summary__pickup-list'>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Ulica
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Miasto
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Kod<br/>pocztowy
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Numer<br/>telefonu
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                    </ul>
                </div>

                <div className='col-6 summary__pickup--date'>
                    <h5 className='summary__title'>
                        Termin odbioru:
                    </h5>
                    <ul className='summary__pickup-list'>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Data
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Godzina
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                        <li className='summary__pickup-list-el'>
                            <p className='summary__pickup-label'>
                                Uwagi dla kuriera
                            </p>
                            <p className='summary__pickup-value'>
                                {}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
}