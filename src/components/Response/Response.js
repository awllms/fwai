import React from 'react';

import { ResponseItem } from '../ResponseItem/ResponseItem';
import FadeIn from 'react-fade-in';

import './Response.css';


export const Response = ({ response: { promptTitle, responseTitle, prompt, responseText, engine }}) => {
    return (
        <FadeIn>
            <div className="Response">
                <div className="Response-button">
                    <div className="Response-engine-container">
                        <span className="engine">{engine}</span>
                    </div>
                </div>
                <ResponseItem title={promptTitle} text={prompt} engine={engine} />
                <ResponseItem title={responseTitle} text={responseText} />
            </div>
        </FadeIn>
    );
};

export default Response;