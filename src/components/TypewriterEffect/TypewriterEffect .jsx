import React, { useState, useEffect } from 'react';
import './TypewriterEffect.css'

const TypewriterEffect = ({ text, speed, delay, showCursor }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1); // Inicialmente -1 para agregar retraso
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex(0);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsCursorVisible(showCursor);
        }
    }, [text, speed, currentIndex, showCursor]);

    return (
        <pre className="typewriter-text bg-transparent">
            {displayText}
            {isCursorVisible && <span className="blinking-cursor">|</span>}
        </pre>
    );
};

export default TypewriterEffect;
