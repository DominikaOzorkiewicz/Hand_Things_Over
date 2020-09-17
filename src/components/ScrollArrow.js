import React, {useState} from "react";
import arrowUp from "../assets/icon-arrow-up.svg";

export const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const showOrHideScroll = () => {
        if (!showScroll && window.pageYOffset > 100) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100 ) {
            setShowScroll(false);
        }
    }
    window.addEventListener('scroll', showOrHideScroll);

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'} );
    }


    return (
        <img
            className={showScroll === true ? 'scrollArrow' : 'scrollArrow__hidden'}
            onClick={handleScrollToTop}
            src={arrowUp}
            title='⬆ Wróć na górę ⬆'
            alt='Arrow up'
        />
    );
}

