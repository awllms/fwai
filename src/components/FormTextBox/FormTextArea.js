import React from 'react';

import { SelectBox } from '../SelectBox/SelectBox';

import './FormTextArea.css';


export const FormTextArea = ({ selectbox, ...formTextAreaProps }) => {
    return (
        <div className="FormTextArea">
            <label>
                <div className="FormTextArea-header">
                    <h2>Enter prompt</h2>
                    <SelectBox value={selectbox[0]} onSelectBoxChange={selectbox[1]} />
                </div>
                <textarea { ...formTextAreaProps } />
            </label>
        </div>
    );
};

export default FormTextArea;