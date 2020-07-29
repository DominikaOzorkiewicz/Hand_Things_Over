import React, { useEffect, useState } from "react";

export const HomeThreeColumns = () => {
    const [bagsCounter, setBagsCounter] = useState(0);
    const [organizationsCounter, setOrganizationsCounter] = useState(0);
    const [collectionCounter, setCollectionCounter] = useState(0);
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [visibility, setVisibility] = useState(true);
    const [done, setDone] = useState(false);

    // Counter
    useEffect(() => {
        if (visibility === true && done === false) {
            setDone(true);

            setCounter(setInterval(() => {
                setBagsCounter(prev => prev + 1);
            }, 50));

            setCounter2(setInterval(() => {
                setOrganizationsCounter(prev => prev + 1);
            }, 50));

            setCounter3(setInterval(() => {
                setCollectionCounter(prev => prev + 1);
            }, 50));
        }
             return () => clearInterval(counter);
         },[visibility]);

    useEffect(() => {
        if (bagsCounter >= 10) {
            clearInterval(counter)
        }

        if (organizationsCounter >= 5) {
            clearInterval(counter2)
        }

        if (collectionCounter >= 7) {
            clearInterval(counter3)
        }
    },[bagsCounter, organizationsCounter, collectionCounter]);

    return (
        <section className='threeColumns row'>

                <div className='col-4 threeColumns__column'>
                    <h2 className='threeColumns__column-counter'>{bagsCounter}</h2>
                    <h5 className='threeColumns__column-title'>oddanych worków</h5>
                    <p className='threeColumns__column-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>

                <div className='col-4 threeColumns__column'>
                    <h2 className='threeColumns__column-counter'>{organizationsCounter}</h2>
                    <h5 className='threeColumns__column-title'>wspartych organizacji</h5>
                    <p className='threeColumns__column-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>

                <div className='col-4 threeColumns__column'>
                    <h2 className='threeColumns__column-counter'>{collectionCounter}</h2>
                    <h5 className='threeColumns__column-title'>zorganizowanych zbiórek</h5>
                    <p className='threeColumns__column-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>

        </section>
    );
}