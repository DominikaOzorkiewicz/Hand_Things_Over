import React, {useEffect, useState} from "react";
import foundations from "../database/foundations.json";
import organizations from "../database/organizations.json";
import donations from "../database/donations.json";
import {Pagination} from "./Pagination";

export const HomeOrganizationsList = ({ contentType }) => {

    const [type, setType] = useState('Fundacja');
    const [activeList, setActiveList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charityElementsPerPage, setCharityElementsPerPage] = useState(3);
    const [elementsCount, setElementsCount] = useState(0);

    const indexOfLastElement = currentPage * charityElementsPerPage;
    const indexOfFirstElement = indexOfLastElement - charityElementsPerPage;


    useEffect(() => {
        setType(contentType);

        if (type === 'Fundacja') {
            let currentElements = foundations.slice(indexOfFirstElement, indexOfLastElement);
            setElementsCount(foundations.length);
            setActiveList(currentElements);
        }
        if (type === 'Organizacja') {
            let currentElements = organizations.slice(indexOfFirstElement, indexOfLastElement);
            setElementsCount(organizations.length);
            setActiveList(currentElements);
        }
        if (type === 'Zbiórka') {
            let currentElements = donations.slice(indexOfFirstElement, indexOfLastElement);
            setElementsCount(donations.length);
            setActiveList(currentElements);
        }

    }, [contentType, type, currentPage]);

    const changePage = pageNumber => {
        setCurrentPage(pageNumber);
    }

    if ( (activeList).length === 0 ) return null;

    return (
        <div className='charity'>

            <ul className='col-12 charity__list'>

                {(activeList).map(element =>
                    <li className='charity__list-el row' key={element.id}>
                        <div className='col-6 charity__list--left'>
                            <h5 className='charity__list-el--name'>
                                {type} "{element.name}"
                            </h5>
                            <p className='charity__list-el--purpose'>
                                {element.purpose}
                            </p>
                        </div>
                        <div className='col-6 charity__list--right'>
                            <p className='charity__list-el--items'>
                                {element.items}
                            </p>
                        </div>
                    </li>
                )}

            </ul>

            {elementsCount <= 3 ? null : <Pagination elementsCount={elementsCount} changePage={changePage} /> }

        </div>
    );
}

