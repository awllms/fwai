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
        "Explain electricity like I'm...",
        "Explain electricity like I'm five years old",
    ]
}

const fetchUrl = 'https://funwithaiserver.herokuapp.com';

export const Prompt = () => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectBoxValue, setSelectBoxValue] = useState('text-curie-001');
    const [responses, setResponses] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [nextPrompt, setNextPrompt] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('responses') && JSON.parse(localStorage.getItem('responses')).length) {
            setResponses(JSON.parse(localStorage.getItem('responses')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('responses', JSON.stringify(responses));
    }, [responses]);

    useEffect(() => {

        if (Object.keys(response).length !== 0) {
            setIsLoading(false);
        }

    }, [response]);

    useEffect(() => {
        async function fetchOpenAi(data) {
            try {
                const response = await fetch(`${fetchUrl}/ai`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({data: data, model: selectBoxValue}),
                });
        
                if (!response.ok) {
                    throw new Error(`An error has occured: ${response.status}`);
                }
        
                const dataResponse = await response.json();

                setResponse(dataResponse);

            } catch (err) {
                setIsError(true);
                setErrorMessage(err.message)
            }
        } 
    
        if (isFetching) {
            fetchOpenAi(initialData);
            setIsFetching(false);
            setIsLoading(true)
        }

    }, [isFetching, selectBoxValue]);

    useEffect(() => {
        if (isError) {
            setNextPrompt({
                promptTitle: 'Prompt:',
                responseTitle: 'Response:',
                prompt: textAreaValue,
                responseText: errorMessage,
                engine: 'Error'
            });
            setIsError(false);
            setResponse(errorMessage);
        }
    }, [isError, textAreaValue, errorMessage]);

    useEffect(() => {
        if (Object.keys(response).length !== 0) {
            setNextPrompt({
                promptTitle: 'Prompt:',
                responseTitle: 'Response:',
                prompt: textAreaValue,
                responseText: response.choices ? response.choices[0].text : '',
                engine: response.model
            });
        }

    }, [response, textAreaValue]);

    useEffect(() => {
        if (responses.indexOf(nextPrompt) === -1 && nextPrompt.responseText && nextPrompt.responseText !=='') {
            setResponses([...responses, nextPrompt]);

            setNextPrompt({
                ...nextPrompt,
                prompt: '',
                responseText: '',
                engine: ''
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

    const onResponsesClearButtonClick = () => {
        setResponses([]);
    }

    return(
        <section className="Prompt">
            <form>
                <FadeIn>
                    <FormTextArea
                        id="enter-prompt"
                        name="prompt-textbox"
                        value={textAreaValue}
                        placeholder="Type or paste (⌘ + V) your text here."
                        onChange={onTextAreaChange}
                        selectbox={[selectBoxValue, onSelectBoxChange]}
                        isloading={isLoading}
                    />
                </FadeIn>
                <div className="button-container">
                    {textAreaValue ? 
                        <FadeIn>
                            <div className="buttons">
                                {
                                    isLoading ?
                                    <CustomButton disabled={true}>
                                        <div className="fa-xl">
                                            <i className="fa-solid fa-circle-notch fa-spin"></i>
                                        </div>
                                    </CustomButton> :
                                    <CustomButton isFetching={isFetching} value="submit" onButtonClick={onButtonClick}>Submit</CustomButton>

                                }

                                {
                                    isLoading ?
                                    <CustomButton disabled={true}>Clear</CustomButton> :
                                    <CustomButton isFetching={isFetching} value="clear" onButtonClick={onButtonClick}>Clear</CustomButton>
                                }
                            </div>
                        </FadeIn> :
                        <CustomButton visibility="hidden">Submit</CustomButton> 
                    }
                </div>
            </form>
            <Presets isloading={isLoading} presets={presets} onPresetItemClick={onPresetItemClick} />
            <Responses isloading={isLoading} responses={responses} onResponsesClearButtonClick={onResponsesClearButtonClick} />
        </section>
    );
};


export default Prompt;