import React from "react";

export const Pagination = ({ elementsCount, changePage }) => {

    const charityElementsPerPage = 3;

    const pages = [];
    for (let i = 1; i <= elementsCount/charityElementsPerPage; i++) {
        pages.push(i);
    }

    return (
        <ul className='pagination'>
            {pages.map(pageNumber =>
                <li
                    key={pageNumber}
                    className='pagination__number'
                    onClick={() => changePage(pageNumber)}
                >
                    {pageNumber}
                </li>
            )}
        </ul>
    );
}