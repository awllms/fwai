import React from 'react';

import { ResponseItem } from '../ResponseItem/ResponseItem';
import FadeIn from 'react-fade-in';

import './Response.css';


export const Response = ({ response: { promptTitle, prompt, responseTitle, responseText }}) => {
    return (
        <FadeIn>
            <div className="Response">
                <ResponseItem title={promptTitle} text={prompt} />

                <ResponseItem title={responseTitle} text={responseText} />
            </div>
        </FadeIn>
    );
};

export default Response;