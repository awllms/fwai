import React, { useState } from 'react';

import { FormTextArea } from '../FormTextBox/FormTextArea';
import { CustomButton } from '../CustomButton/CustomButton';
import { Responses } from '../Responses/Responses';
import { Presets } from '../Presets/Presets';

import FadeIn from 'react-fade-in';

import './Prompt.css';

const data = {
    prompt: "",
    max_tokens: 64,
    temperature: 0.5,
    top_p: 1.0,
    presence_penalty: 0.0,
    frequency_penalty: 0.0
}

const presets = {
    1: [
        "Convert movie titles into emoji.",
        "Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒\nBatman: 🤵🦇\nTransformers: 🚗🤖\nStar Wars:"
    ],
    2: "Who is Batman?",
    3: "Write a poem about golden doodles in the fall."
}

export const Prompt = () => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectBoxValue, setSelectBoxValue] = useState('text-curie-001');
    const [responses, setResponses] = useState([]);

    const onButtonClick = (event) => {
        event.preventDefault();
        const { value } = event.target;
        
        if (value === 'clear') {
            setTextAreaValue('');
        } else if (value === 'submit') {
            if (textAreaValue) {
                data.prompt = textAreaValue;
                // console.log(data);
    
                // fetch data
                
                const newPrompt = {
                    promptTitle: 'Prompt:',
                    prompt: textAreaValue,
                    responseTitle: 'Response:',
                    responseText: 'This is a sample response.'
                }
    
                setResponses([...responses, newPrompt])
            }
        }

    }

    const onTextAreaChange = (event) => {
        const { value } = event.target;
        setTextAreaValue(value);

        // console.log(process.env.REACT_APP_OPENAI_API_KEY)
    }

    const onSelectBoxChange = (event) => {
        const { value } = event.target;
        setSelectBoxValue(value);
        console.log(value)
    }

    const onPresetItemClick = (key) => {
        if (parseInt(key) === 1) {
            setTextAreaValue(presets[key][1])
        } else {
            setTextAreaValue(presets[key])
        }
    }

    return(
        <section className="Prompt">
            <form>
                <FormTextArea
                    id="enter-prompt"
                    name="prompt-textbox"
                    value={textAreaValue}
                    placeholder="Type or paste (⌘ + V) your text here."
                    onChange={onTextAreaChange}
                    selectbox={[selectBoxValue, onSelectBoxChange]}
                />
                <div className="button-container">
                    {textAreaValue ? 
                        <FadeIn>
                            <div className="buttons">
                                <CustomButton value="submit" onButtonClick={onButtonClick}>Submit</CustomButton>
                                <CustomButton value="clear" onButtonClick={onButtonClick}>Clear</CustomButton>
                            </div>
                        </FadeIn> :
                        <CustomButton visibility="hidden">Submit</CustomButton> 
                    }
                </div>
            </form>
            <Presets presets={presets} onPresetItemClick={onPresetItemClick} />
            <Responses responses={responses} />
        </section>
    );
};


export default Prompt;