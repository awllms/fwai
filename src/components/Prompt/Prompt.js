import React, { useState } from 'react';

import { FormTextArea } from '../FormTextBox/FormTextArea';
import { CustomButton } from '../CustomButton/CustomButton';
import FadeIn from 'react-fade-in';

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
                    placeholder="Type or paste (⌘ + V) your text here."
                    onChange={onTextAreaChange}
                />
            
                <div className="button-container">
                    {textAreaValue ? 
                        <FadeIn>
                        <CustomButton>Submit</CustomButton>
                        </FadeIn> :
                        <CustomButton visibility="hidden">Submit</CustomButton> 
                    }
                </div>
            </form>
        </section>
    );
};


export default Prompt;