import React from 'react';

import './CustomButton.css';

export const CustomButton = ({ children, visibility, value, isFetching, disabled, onButtonClick }) => {
    const buttonClasses = `CustomButton ${value === 'clear' ? 'red' : ''} ${isFetching ? 'fetching' : ''} ${disabled ? 'disabled' : ''}`
    return (
        <button className={buttonClasses} disabled={disabled} value={value} onClick={onButtonClick} style={{ visibility: visibility}}>{ children }</button>
    );
};

export default CustomButton;