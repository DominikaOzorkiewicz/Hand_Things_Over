import React, {useEffect, useState} from "react";
import {Info} from "./Info";

export const Steps = () => {
    // Set current Step number
    const [currentStep, setCurrentStep] = useState(1);
    // Title for current step
    const [title, setTitle] = useState('');
    // Text for Info component
    const [infoText, setInfoText] = useState('');

    // Switch statement for set Step
    useEffect(() => {
        switch (currentStep) {
            case 1:
                setCurrentStep(1);
                setTitle('Zaznacz co chcesz oddać:');
                setInfoText('Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.');
                break;

            case 2:
                setCurrentStep(1);
                setTitle('Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:');
                setInfoText('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.');
                break;

            case 3:
                setCurrentStep(1);
                setTitle('Lokalizacja:');
                setInfoText('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.');
                break;

            case 4:
                setCurrentStep(1);
                setTitle('Podaj adres oraz termin odbioru rzecz przez kuriera');
                setInfoText('Podaj adres oraz termin odbioru rzeczy.');
                break;

            default:
                break;
        }
    },[currentStep]);


    return (
        <>
            <Info text={infoText}/>

            <section className='steps row'>
                <div className='col-12 steps__numbering'>
                    <p>
                        Krok {currentStep}/4
                    </p>
                </div>

                <div className='col-12'>
                    <h3 className='steps__title'>{title}</h3>
                </div>

                <div className='col-8'>
                    FORM
                </div>

                <div className='col-12'>
                    NAVIGATION BUTTONS
                </div>

            </section>
        </>
    );
}