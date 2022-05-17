import React from 'react';

import { ResponseItem } from '../ResponseItem/ResponseItem';


import './Response.css';


export const Response = () => {
    return (
        <div className="Response">
            <ResponseItem title="Prompt:" text="This is a test prompt." />

            <ResponseItem title="Response:" text="This is a test response." />
        </div>
    );
};

export default Response;