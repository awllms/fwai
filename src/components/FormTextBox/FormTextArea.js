import React from 'react';

import './FormTextArea.css';


export const FormTextArea = ({ ...formTextAreaProps }) => {
    return(
        <div className="FormTextArea">
            <label>
                <h2>Enter prompt</h2>
                <textarea { ...formTextAreaProps } />
            </label>
        </div>
    );
};

export default FormTextArea;