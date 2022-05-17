import React from 'react';

import './SelectBox.css';


export const SelectBox = ({ value, onSelectBoxChange}) => {
    return (
        <div className="SelectBox">
            <h4>Engine:</h4>
            <select value={value} onChange={onSelectBoxChange}>
                <option value="text-davinci-002">text-davinci-002</option>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-babbage-001">text-babbage-001</option>
                <option value="text-ada-001">text-ada-001</option>
            </select>
        </div>
    );
};


export default SelectBox;