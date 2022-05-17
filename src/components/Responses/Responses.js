import React from 'react';

import { Response } from '../Response/Response';
import { DefaultResponse } from '../DefaultResponse/DefaultResponse';

import './Responses.css';

export const Responses = ({ responses }) => {
    return(
        <section className="Responses">
            <h3>Responses</h3>
            {responses.length ?
                responses.map((response, index) =>
                    <Response key={index} response={response} />
                ).reverse() :
                    <DefaultResponse />
            }

        </section>
    );
};

export default Responses;