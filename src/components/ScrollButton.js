import React, { useState } from 'react';

function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="topButton">
            <button className="backToTop" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>Back To Top</button>
        </div>
    );
}

export default ScrollButton;