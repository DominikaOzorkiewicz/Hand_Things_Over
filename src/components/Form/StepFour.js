import React, {useState} from "react";

export const StepFour = () => {

    // Pickup Address
    const [userAddress, setUserAddress] = useState({
        street: '',
        city: '',
        postcode: '',
        phone: ''
    });

    const handleSetAddress = event => {
        const {name, value} = event.target;

        setUserAddress(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // Pickup Date
    const [pickupDate, setPickupDate] = useState({
        date: '',
        hour: '',
        notes: ''
    });

    const handleSetDate = event => {
        const {name, value} = event.target;

        setPickupDate(prev => ({
            ...prev,
            [name]: value
        }));
    }


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
                            value={userAddress.street}
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
                            value={userAddress.city}
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
                            value={userAddress.postcode}
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
                            value={userAddress.phone}
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
                            value={pickupDate.date}
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
                            value={pickupDate.hour}
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
                            value={pickupDate.notes}
                            onChange={handleSetDate}
                            style={ {width: '256px', height: '120px'} }
                        />
                    </div>
                </div>

            </div>
        </>
    );
}