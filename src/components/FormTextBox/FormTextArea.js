import React from 'react';

import { SelectBox } from '../SelectBox/SelectBox';

import './FormTextArea.css';


export const FormTextArea = ({ selectbox, isloading, ...formTextAreaProps }) => {
    const loadingClassName = `${isloading ? 'loading' : ''}`;
    return (
        <div className="FormTextArea">
            <label>
                <div className="FormTextArea-header">
                    <h2>Enter prompt</h2>
                    <SelectBox value={selectbox[0]} onSelectBoxChange={selectbox[1]} />
                </div>
                {
                    isloading ? 
                    <textarea { ...formTextAreaProps } className={loadingClassName} readOnly /> :
                    <textarea { ...formTextAreaProps } className={loadingClassName} />

                }
            </label>
        </div>
    );
};

export default FormTextArea;