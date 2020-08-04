import React, {useState} from "react";

export const StepOne = () => {
    const [donatedThings, setDonatedThings] = useState('');

    const handleSelectDonatedThings = (event) => {
        setDonatedThings(event.target.value);
    }

    return (
        <>
            <div className='form__checkboxes'>

                <label className='form__checkbox-container'>
                    ubrania, które nadają się do ponownego użycia
                    <input type='radio'
                           className='form__checkbox-box'
                           name={'donatedThings'}
                           value={'ubrania, które nadają się do ponownego użycia'}
                           onChange={handleSelectDonatedThings}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    ubrania do wyrzucenia
                    <input type='radio'
                           className='form__checkbox-box'
                           name={'donatedThings'}
                           value={'ubrania, do wyrzucenia'}
                           onChange={handleSelectDonatedThings}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    zabawki
                    <input type='radio'
                           className='form__checkbox-box'
                           name={'donatedThings'}
                           value={'zabawki'}
                           onChange={handleSelectDonatedThings}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    książki
                    <input type='radio'
                           className='form__checkbox-box'
                           name={'donatedThings'}
                           value={'książki'}
                           onChange={handleSelectDonatedThings}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    inne
                    <input type='radio'
                           className='form__checkbox-box'
                           name={'donatedThings'}
                           value={'inne'}
                           onChange={handleSelectDonatedThings}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

            </div>
        </>
    );
}
