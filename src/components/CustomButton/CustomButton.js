import React from 'react';

import './CustomButton.css';

export const CustomButton = ({ children, visibility, value, onButtonClick }) => {
    const buttonClasses = `CustomButton ${value === 'clear' ? 'red' : ''}`
    return (
        <button className={buttonClasses} value={value} onClick={onButtonClick} style={{ visibility: visibility}}>{ children }</button>
    );
};

export default CustomButton;