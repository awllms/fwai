import React from 'react';

import './ResponseItem.css';

export const ResponseItem = ({ title, text }) => {
    return (
        <div className="ResponseItem">
            <h4>{ title }</h4>
            <p>{ text }</p>
        </div>
    );
};

export default ResponseItem;