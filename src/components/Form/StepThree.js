import React, {useState} from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import arrowUp from "../../assets/icon-arrow-up.svg";

export const StepThree = ({ location, helpGroup, organizationName, handleComplexInfo }) => {
    // Location
    const cities = ['Katowice', 'Kraków', 'Poznań', 'Warszawa', 'Wrocław'];
    const [city, setCity] = useState(location);
    const handleChooseLocation = (event) => {
        handleComplexInfo('location', event.target.value);
        setCity(event.target.value);
    }

    // Drop options list for select custom input
    const [drop, setDrop] = useState(false);
    const handleDrop = (event) => {
        setDrop(!drop);
    }

    // Help Groups
    const helpGroups = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym'];
    const [selectedGroup, setSelectedGroup] = useState(helpGroup);
    const handleChooseHelpGroup = (event) => {
        setSelectedGroup(event.target.value);
        handleComplexInfo('helpGroup', event.target.value);
    }

    // Organization Name (optional)
    const [orgName, setOrgName] = useState(organizationName);
    const handleOrgName = (event) => {
        handleComplexInfo('organizationName', event.target.value);
        setOrgName(event.target.value);
    }

    return (
        <>
            {/* --- START Location select --- */}
            <div className='form__location'>
                <div className='form__location-select form__select'>
                    <div className='form__select-input' onClick={handleDrop}>
                        <div className='form__select-value'>
                            {city}
                        </div>
                        <img
                            className='form__select-arrow'
                            src={drop === true ? arrowDown : arrowUp}
                            alt='Arrow'
                        />
                    </div>
                    <div
                        className={drop === true ?
                            'form__location-select-list form__select-list--drop'
                            :
                            'form__select-list--hidden'
                        }
                        onClick={handleDrop}
                    >
                        {drop && (
                            <ul>
                                {cities.map((city, index) =>
                                    <option
                                        key={index}
                                        value={city}
                                        className='form__location-select-list-el form__select-list-el'
                                        onClick={handleChooseLocation}
                                    >
                                        {city}
                                    </option>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {/* --- END Location select --- */}

            {/* --- START Help Groups checkboxes --- */}
            <p className='form__helpGroups-title row'>
                Komu chcesz pomóc?
            </p>
            <div className='form__helpGroups row'>
                {helpGroups.map((group, index) =>
                    <React.Fragment key={index}>
                        <input type='checkbox'
                               id={group}
                               className='form__helpGroups-checkbox'
                               name='helpGroup'
                               value={group}
                               onChange={handleChooseHelpGroup}
                               checked={selectedGroup === group}
                        />
                        <label
                            className='form__helpGroups-label'
                            htmlFor={group}
                        >
                            {group}
                        </label>
                    </React.Fragment>
                )}
            </div>
            {/* --- END Help Groups checkboxes --- */}

            {/* --- START Organization text input --- */}
            <div className='form__org'>
                <label className='form__org-label'>
                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    <input
                        type='text'
                        className='form__org-input'
                        value={orgName}
                        onChange={handleOrgName}
                    />
                </label>
            </div>
            {/* --- END Organization text input --- */}
        </>
    );
}