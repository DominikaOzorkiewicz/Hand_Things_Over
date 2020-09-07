import React, {useEffect, useState} from "react";
import {Info} from "./Info";
import {StepOne} from "./StepOne";
import {StepTwo} from "./StepTwo";
import {StepThree} from "./StepThree";
import {StepFour} from "./StepFour";
import {NavButtons} from "./NavButtons";
import {Summary} from "./Summary";

export const Steps = () => {
    // Set current Step number
    const [currentStep, setCurrentStep] = useState(1);
    // Title for current step
    const [title, setTitle] = useState('');
    // Text for Info component
    const [infoText, setInfoText] = useState('');
    // Set a specific component based on the Step number
    const [stepComponent, setStepComponent] = useState(<StepOne />);

    // Complex steps form info
    const [stepsInfo, setStepsInfo] = useState({
        donatedThings: '',
        bagsQuantity: 0,
        location: '',
        helpGroup: '',
        organizationName: '',
        userAddress: {
            street: '',
            city: '',
            postcode: '',
            phone: ''
        },
        pickupDate: {
            date: '',
            hour: '',
            notes: ''
        }
    });

    const handleComplexInfo = (name, value) => {
        setStepsInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }

    console.log(stepsInfo);


    // Switch statement for set Step
    useEffect(() => {
        switch (currentStep) {
            case 1:
                setCurrentStep(1);
                setTitle('Zaznacz co chcesz oddać:');
                //setStepComponent(<StepOne donatedThings={donatedThings} handleThings={handleDonatedThings}/>);
                setStepComponent(
                    <StepOne
                        donatedThings={stepsInfo.donatedThings}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText('Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.');
                break;

            case 2:
                setCurrentStep(2);
                setTitle('Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:');
                setStepComponent(
                    <StepTwo
                        bagsQuantity={stepsInfo.bagsQuantity}
                        handleComplexInfo={handleComplexInfo}/>
                    );
                setInfoText('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.');
                break;

            case 3:
                setCurrentStep(3);
                setTitle('Lokalizacja:');
                setStepComponent(
                    <StepThree
                        location={stepsInfo.location}
                        helpGroup={stepsInfo.helpGroup}
                        organizationName={stepsInfo.organizationName}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.');
                break;

            case 4:
                setCurrentStep(4);
                setTitle('Podaj adres oraz termin odbioru rzeczy przez kuriera');
                setStepComponent(
                    <StepFour
                        userAddress={stepsInfo.userAddress}
                        pickupDate={stepsInfo.pickupDate}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText('Podaj adres oraz termin odbioru rzeczy.');
                break;

            case 5:
                setCurrentStep(5);
                setTitle('Podsumowanie Twojej darowizny');
                setStepComponent(<Summary stepsInfo={stepsInfo}/>);
                setInfoText('');
                break;

            default:
                break;
        }
    },[currentStep]);

    const handleChangePage = (page) => {
        setCurrentStep(page);
    }


    return (
        <>
            {currentStep === 5 ?
                null : <Info text={infoText} />
            }

            <section className='steps row'>
                <div className='col-12 steps__numbering'>
                    {currentStep === 5 ? null :
                        <p>
                            Krok {currentStep}/4
                        </p>
                    }
                </div>

                <div className='col-12'>
                    <h3 className='steps__title'>
                        {title}
                    </h3>
                </div>

                <div className='col-8'>
                    <form className='form' id='donationForm'>
                        {stepComponent}
                    </form>
                </div>

                <div className='col-5 navButtons'>
                    <NavButtons currentStep={currentStep} changePage={handleChangePage}/>
                </div>

            </section>
        </>
    );
}