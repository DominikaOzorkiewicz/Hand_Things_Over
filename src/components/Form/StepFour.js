import React, {useState} from "react";

export const StepFour = ({ userAddress, pickupDate, handleComplexInfo }) => {

    // Pickup Address
    const [address, setAddress] = useState(userAddress);
    const handleSetAddress = event => {
        const {name, value} = event.target;
        setAddress(prev => ({
            ...prev,
            [name]: value
        }));
        handleComplexInfo('userAddress', address);
    }

    // Pickup Date
    const [date, setDate] = useState(pickupDate);
    const handleSetDate = event => {
        const {name, value} = event.target;
        setDate(prev => ({
            ...prev,
            [name]: value
        }));
        handleComplexInfo('pickupDate', date);
    }

    // Defaulting input to the value of today
    const today = new Date().toISOString().substr(0, 10);

    return (
        <>
            <div className='form__pickup row'>

                <div className='col-6 form__pickup-place'>
                    <h5 className='form__pickup-title'>
                        Adres odbioru:
                    </h5>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='street'
                        >
                            Ulica
                        </label>
                        <input
                            type='text'
                            id='street'
                            name='street'
                            className='form__pickup-input'
                            value={address.street}
                            onChange={handleSetAddress}
                            minLength={2}
                            required
                        />
                    </div>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='city'
                        >
                            Miasto
                        </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            className='form__pickup-input'
                            value={address.city}
                            onChange={handleSetAddress}
                            minLength={2}
                            required
                        />
                    </div>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='postcode'
                        >
                            Kod<br/>pocztowy
                        </label>
                        <input
                            type='text'
                            id='postcode'
                            name='postcode'
                            className='form__pickup-input'
                            value={address.postcode}
                            onChange={handleSetAddress}
                            pattern="[0-9]{2}-[0-9]{3}"
                            minLength={6}
                            maxLength={6}
                            required
                        />
                    </div>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='phone'
                        >
                            Numer<br/>telefonu
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            className='form__pickup-input'
                            value={address.phone}
                            onChange={handleSetAddress}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            minLength={9}
                            maxLength={9}
                            required
                        />
                    </div>
                </div>

                <div className='col-6 form__pickup-date'>
                    <h5 className='form__pickup-title'>
                        Termin odbioru:
                    </h5>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='date'
                        >
                            Data
                        </label>
                        <input
                            type='date'
                            id='date'
                            name='date'
                            className='form__pickup-input'
                            value={date.date}
                            min={today}
                            onChange={handleSetDate}
                            required
                        />
                    </div>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='hour'
                        >
                            Godzina
                        </label>
                        <input
                            type='time'
                            id='hour'
                            name='hour'
                            className='form__pickup-input'
                            value={date.hour}
                            onChange={handleSetDate}
                            required
                        />
                    </div>

                    <div className='form__pickup-box'>
                        <label
                            className='form__pickup-label'
                            htmlFor='notes'
                        >
                            Uwagi<br/>dla kuriera
                        </label>
                        <input
                            type='text'
                            id='notes'
                            name='notes'
                            className='form__pickup-input'
                            value={date.notes}
                            onChange={handleSetDate}
                            style={ {width: '256px', height: '120px'} }
                        />
                    </div>
                </div>

            </div>
        </>
    );
}