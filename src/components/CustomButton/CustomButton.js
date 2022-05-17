import React from 'react';

import './CustomButton.css';

export const CustomButton = ({ children }) => {
    return (
        <button className="CustomButton-regular">{ children }</button>
    );
};

export default CustomButton;