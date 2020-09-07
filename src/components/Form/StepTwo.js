import React, {useState} from "react";
import arrowDown from '../../assets/icon-arrow-down.svg';
import arrowUp from '../../assets/icon-arrow-up.svg';

export const StepTwo = ( {bagsQuantity, handleComplexInfo} ) => {
    // Options for select custom input
    const options = [1, 2, 3, 4, 5];
    // Selected option
    const [bags, setBags] = useState(bagsQuantity);
    const handleSelectBagsQuantity = (event) => {
        handleComplexInfo('bagsQuantity', event.target.value);
        setBags(event.target.value);
    }

    // Drop options list for select custom input
    const [drop, setDrop] = useState(false);
    const handleDrop = (event) => {
        setDrop(!drop);
    }

    return (
        <div className='form__select-container'>

            <label className='form__select-label'>
                Liczba 60l worków:
            </label>

            <div className='form__select'>

                <div className='form__select-input' onClick={handleDrop}>
                    <div className='form__select-value'>
                        {bags}
                    </div>
                    <img
                        className='form__select-arrow'
                        src={ (drop === true ? arrowDown : arrowUp) }
                        alt='Arrow'
                    />
                </div>

                <div className={ (drop === true ? 'form__select-list--drop' : 'form__select-list--hidden') } onClick={handleDrop}>
                    {drop && (
                        <ul>
                            {options.map((option, index) =>
                                <li key={index}
                                    value={option}
                                    className={'form__select-list-el'}
                                    onClick={handleSelectBagsQuantity}>
                                    {option}
                                </li>
                            )}
                        </ul>
                    )}
                </div>

            </div>

        </div>
    );
}