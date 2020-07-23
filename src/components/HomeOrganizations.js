import React, {useState} from "react";
import decoration from "../assets/decoration.svg";
import {HomeOrganizationsList} from "./HomeOrganizationsList";

export const HomeOrganizations = () => {
    const [type, setType] = useState('Fundacja');

    const handleChooseType = (event) => {
        setType(event.target.value);
    }

    return (
        <section className='organizations' id='organizations'>

            <div className='row'>
                <div className='col-12 organizations__title'>
                    <h2>Komu pomagamy?</h2>
                </div>
                <img className='organizations__deco' src={decoration} alt='Decoration'/>
            </div>

            <div className='organizations__buttons row'>
                <button className='organizations__buttons-single col-2' value={'Fundacja'} onClick={handleChooseType}>Fundacjom</button>
                <button className='organizations__buttons-single col-2' value={'Organizacja'} onClick={handleChooseType}>Organizacjom<br/>pozarządowym</button>
                <button className='organizations__buttons-single col-2' value={'Zbiórka'} onClick={handleChooseType}>Lokalnym zbiórkom</button>
            </div>

            <div className='row'>
                <p className='organizations__text'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>

            <div className='row'>
                <HomeOrganizationsList contentType={type}/>
            </div>

        </section>
    );
}