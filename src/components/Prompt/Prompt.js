import React, { useState } from 'react';

import { FormTextArea } from '../FormTextBox/FormTextArea';
import { CustomButton } from '../CustomButton/CustomButton';

import './Prompt.css';

export const Prompt = () => {
    const [textAreaValue, setTextAreaValue] = useState('');

    const onTextAreaSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted: ' + textAreaValue);
    }

    const onTextAreaChange = (event) => {
        const { value } = event.target;
        setTextAreaValue(value);
        console.log(value);
    }

    return(
        <section className="Prompt">
            <form onSubmit={onTextAreaSubmit}>
                <FormTextArea
                    id="enter-prompt"
                    name="prompt-textbox"
                    value={textAreaValue}
                    onChange={onTextAreaChange}
                />
                <CustomButton>Submit</CustomButton>
            </form>
        </section>
    );
};


export default Prompt;