import React, { useState, useEffect } from 'react';

import { FormTextArea } from '../FormTextBox/FormTextArea';
import { CustomButton } from '../CustomButton/CustomButton';
import { Responses } from '../Responses/Responses';
import { Presets } from '../Presets/Presets';

import FadeIn from 'react-fade-in';

import './Prompt.css';

const initialData = {
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
    3: [
        "Write a poem about golden...",
        "Write a poem about golden doodles."

    ]
}

export const Prompt = () => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectBoxValue, setSelectBoxValue] = useState('text-curie-001');
    const [responses, setResponses] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [nextPrompt, setNextPrompt] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState({});

    useEffect(() => {
        async function fetchOpenAi(data) {
            try {
                const response = await fetch(`https://api.openai.com/v1/engines/${selectBoxValue}/completions`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
                    },
                    body: JSON.stringify(data),
                });
        
                if (!response.ok) {
                    throw new Error(`An error has occured: ${response.status}`);
                }
        
                const dataResponse = await response.json();

                setResponse(dataResponse);

            } catch (err) {
                console.log(err.message)
                setIsError(true);
                setErrorMessage(err.message)
            }
        } 
    
        if (isFetching) {
            fetchOpenAi(initialData);
            setIsFetching(false);
        }

    }, [isFetching, selectBoxValue]);

    useEffect(() => {
        if (isError) {
            setNextPrompt({
                promptTitle: 'Prompt:',
                responseTitle: 'Response:',
                prompt: textAreaValue,
                responseText: errorMessage
            });
            setIsError(false);
        }
    }, [isError, textAreaValue, errorMessage]);

    useEffect(() => {
        if (Object.keys(response).length !== 0) {
            console.log(response)
            setNextPrompt({
                promptTitle: 'Prompt:',
                responseTitle: 'Response:',
                prompt: textAreaValue,
                responseText: response.choices[0].text
            });
        }

    }, [response, textAreaValue]);

    useEffect(() => {
        if (responses.indexOf(nextPrompt) === -1 && nextPrompt.responseText) {
            setResponses([...responses, nextPrompt]);

            setNextPrompt({
                ...nextPrompt,
                prompt: '',
                responseText: ''
            });

            setResponse({})
        }

    }, [nextPrompt, responses, response]);

    const onButtonClick = (event) => {
        event.preventDefault();
        const { value } = event.target;
        
        if (value === 'clear') {
            setTextAreaValue('');
        } else if (value === 'submit') {
            if (textAreaValue) {
                initialData.prompt = textAreaValue;

                setIsFetching(true);

            }
        }

    }

    const onTextAreaChange = (event) => {
        const { value } = event.target;
        setTextAreaValue(value);
    }

    const onSelectBoxChange = (event) => {
        const { value } = event.target;
        setSelectBoxValue(value);
        console.log(value)
    }

    const onPresetItemClick = (key) => {
        if (parseInt(key) === 1) {
            setTextAreaValue(presets[key][1])
        } else if (parseInt(key) === 3) {
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
                                {
                                    isFetching ?
                                    <CustomButton isFetching={isFetching} disabled={true} value="submit" onButtonClick={onButtonClick}>Test</CustomButton> :
                                    <CustomButton isFetching={isFetching} value="submit" onButtonClick={onButtonClick}>Submit</CustomButton>

                                }
                                <CustomButton isFetching={isFetching} value="clear" onButtonClick={onButtonClick}>Clear</CustomButton>
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