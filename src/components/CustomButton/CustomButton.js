import React from 'react';

import './CustomButton.css';

export const CustomButton = ({ children, visibility }) => {
    return (
        <button className="CustomButton" style={{ visibility: visibility}}>{ children }</button>
    );
};

export default CustomButton;