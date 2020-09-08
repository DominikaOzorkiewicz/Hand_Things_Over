import React, {useEffect, useState} from "react";
import {Info} from "./Info";
import {StepOne} from "./StepOne";
import {StepTwo} from "./StepTwo";
import {StepThree} from "./StepThree";
import {StepFour} from "./StepFour";
import {NavButtons} from "./NavButtons";
import {Summary} from "./Summary";
import firebase from "firebase";
import {ThankYou} from "./ThankYou";

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
    const [donationInfo, setDonationInfo] = useState({
        userID: JSON.parse(localStorage.getItem('ActiveUser')).user.uid,
        donatedThings: '',
        bagsQuantity: '— wybierz —',
        location: '— wybierz —',
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
        setDonationInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }


    // Switch statement for set Step
    useEffect(() => {
        switch (currentStep) {
            case 1:
                setCurrentStep(1);
                setTitle('Zaznacz co chcesz oddać:');
                setStepComponent(
                    <StepOne
                        donatedThings={donationInfo.donatedThings}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText(
                    'Uzupełnij szczegóły dotyczące Twoich rzeczy.' +
                    'Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.');
                break;

            case 2:
                setCurrentStep(2);
                setTitle('Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:');
                setStepComponent(
                    <StepTwo
                        bagsQuantity={donationInfo.bagsQuantity}
                        handleComplexInfo={handleComplexInfo}/>
                    );
                setInfoText(
                    'Wszystkie rzeczy do oddania zapakuj w 60l worki.' +
                    'Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.');
                break;

            case 3:
                setCurrentStep(3);
                setTitle('Lokalizacja:');
                setStepComponent(
                    <StepThree
                        location={donationInfo.location}
                        helpGroup={donationInfo.helpGroup}
                        organizationName={donationInfo.organizationName}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText(
                    'Jeśli wiesz komu chcesz pomóc,' +
                    'możesz wpisać nazwę tej organizacji w wyszukiwarce.' +
                    'Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.');
                break;

            case 4:
                setCurrentStep(4);
                setTitle('Podaj adres oraz termin odbioru rzeczy przez kuriera');
                setStepComponent(
                    <StepFour
                        userAddress={donationInfo.userAddress}
                        pickupDate={donationInfo.pickupDate}
                        handleComplexInfo={handleComplexInfo}/>
                        );
                setInfoText('Podaj adres oraz termin odbioru rzeczy.');
                break;

            case 5:
                setCurrentStep(5);
                setTitle('Podsumowanie Twojej darowizny');
                setStepComponent(<Summary donationInfo={donationInfo}/>);
                setInfoText('');
                break;

            case 6:
                setCurrentStep(6);
                setTitle('');
                setStepComponent(<ThankYou />);
                setInfoText('');
                break;

            default:
                break;
        }
    },[currentStep]);

    const handleChangePage = (page) => {
        setCurrentStep(page);
    }

    // Submit form and save it in database
    const handleSubmitForm = (event) => {
        event.preventDefault();
        // Get a key for a new Post
        let newPostKey = firebase.database().ref().child('donations').push().key;
        firebase
            .database().ref('donations/' + newPostKey).set(donationInfo);
    }


    return (
        <>
            {currentStep >= 5 ?
                null : <Info text={infoText} />
            }

            <section className='steps row'>
                <div className='col-12 steps__numbering'>
                    {currentStep >= 5 ? null :
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
                    <form
                        className='form'
                        id='donationForm'
                        onSubmit={handleSubmitForm}
                    >
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