import React from 'react';


export const Response = () => {
    return (
        <div className="Response-container">
            <div className="Response-prompt-container">
                <span className="Response-prompt">Prompt: </span>
                <p>This is a test prompt.</p>
            </div>

            <div className="Response-response-container">
                <span className="Response-prompt">Response: </span>
                <p>This is a test response.</p>
            </div>
        </div>
    );
};

export default Response;