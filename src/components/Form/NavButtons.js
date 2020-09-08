import React, {useState} from "react";

export const NavButtons = ({ currentStep, changePage }) => {
    const [page, setPage] = useState(currentStep);

    // Method for set next page
    const handleNextPage = (event) => {
        event.preventDefault();
        setPage(prevState => prevState +1);
        changePage(page +1);
    }

    // Method for set previous page
    const handlePreviousPage = (event) => {
        event.preventDefault();
        setPage(prevState => prevState -1);
        changePage(page -1);
    }

    // In ThankYou component NavButtons disappears
    if (page >= 6) return null;

    return (
        <>
            {page === 1 && (
                <button
                    className='navButtons__button'
                    onClick={handleNextPage}
                >
                    Dalej
                </button>
            )}

            {page >= 2 && page < 5 && (
                <>
                    <button
                        className='navButtons__button'
                        onClick={handlePreviousPage}
                    >
                        Wstecz
                    </button>

                    <button
                        className='navButtons__button'
                        onClick={handleNextPage}
                    >
                        Dalej
                    </button>
                </>
            )}

            {page === 5 && (
                <>
                    <button
                        className='navButtons__button'
                        onClick={handlePreviousPage}
                    >
                        Wstecz
                    </button>

                    <button
                        className='navButtons__button'
                        form='donationForm'
                        type='submit'
                    >
                        Potwierdzam
                    </button>
                </>
            )}
        </>
    );
}