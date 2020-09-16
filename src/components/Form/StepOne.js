import React, {useState} from "react";

export const StepOne = ({ donatedThings, handleComplexInfo }) => {
    const [donatedType, setDonatedType] = useState(donatedThings);
    const handleSelectDonatedThings = (event) => {
        handleComplexInfo('donatedThings', event.target.value);
        setDonatedType(event.target.value);
    }

    return (
        <>
            <div className='form__checkboxes'>

                <label className='form__checkbox-container'>
                    ubrania, które nadają się do ponownego użycia
                    <input type='radio'
                           className='form__checkbox-box'
                           name='donatedThings'
                           value='ubrania, które nadają się do ponownego użycia'
                           onChange={handleSelectDonatedThings}
                           checked={donatedType === 'ubrania, które nadają się do ponownego użycia'}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    ubrania do wyrzucenia
                    <input type='radio'
                           className='form__checkbox-box'
                           name='donatedThings'
                           value='ubrania, do wyrzucenia'
                           onChange={handleSelectDonatedThings}
                           checked={donatedType === 'ubrania, do wyrzucenia'}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    zabawki
                    <input type='radio'
                           className='form__checkbox-box'
                           name='donatedThings'
                           value='zabawki'
                           onChange={handleSelectDonatedThings}
                           checked={donatedType === 'zabawki'}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    książki
                    <input type='radio'
                           className='form__checkbox-box'
                           name='donatedThings'
                           value='książki'
                           onChange={handleSelectDonatedThings}
                           checked={donatedType === 'książki'}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

                <label className='form__checkbox-container'>
                    inne
                    <input type='radio'
                           className='form__checkbox-box'
                           name='donatedThings'
                           value='inne'
                           onChange={handleSelectDonatedThings}
                           checked={donatedType === 'inne'}
                    />
                    <span className='form__checkbox-checkmark' />
                </label>

            </div>
        </>
    );
}
