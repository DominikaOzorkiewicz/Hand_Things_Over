import React from "react";
import decoration from "../assets/decoration.svg";

export const HomeOrganizations = () => {

    return (
        <section className='organizations' id='organizations'>

            <div className='row'>
                <div className='col-12 organizations__title'>
                    <h2>Komu pomagamy?</h2>
                </div>
                <img className='organizations__deco' src={decoration} alt='Decoration'/>
            </div>

            <div className='organizations__buttons row'>
                <button className='organizations__buttons-single col-2'>Fundacjom</button>
                <button className='organizations__buttons-single col-2'>Organizacjom<br/>pozarządowym</button>
                <button className='organizations__buttons-single col-2'>Lokalnym zbiórkom</button>
            </div>

            <div className='row'>
                <p className='organizations__text'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>

            <div className='row'>
                Lista organizacji
            </div>

        </section>
    );
}