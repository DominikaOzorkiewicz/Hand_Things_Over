import React from "react";

export const HomeThreeColumns = () => {

    return (
        <section className='threeColumns row'>

            <div className='col-4 threeColumns__column'>
                <h2 className='threeColumns__column-counter'>10</h2>
                <h5 className='threeColumns__column-title'>oddanych worków</h5>
                <p className='threeColumns__column-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>

            <div className='col-4 threeColumns__column'>
                <h2 className='threeColumns__column-counter'>5</h2>
                <h5 className='threeColumns__column-title'>wspartych organizacji</h5>
                <p className='threeColumns__column-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>

            <div className='col-4 threeColumns__column'>
                <h2 className='threeColumns__column-counter'>7</h2>
                <h5 className='threeColumns__column-title'>zorganizowanych zbiórek</h5>
                <p className='threeColumns__column-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>

        </section>
    );
}