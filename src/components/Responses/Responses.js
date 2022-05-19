import React from 'react';

import { Response } from '../Response/Response';
import { DefaultResponse } from '../DefaultResponse/DefaultResponse';
import { CustomButton } from '../CustomButton/CustomButton';

import FadeIn from 'react-fade-in';

import './Responses.css';

export const Responses = ({ isloading, responses, onResponsesClearButtonClick }) => {
    return(
        <section className="Responses">
            <div className="Responses-header">
                <h3>Responses</h3>
                {responses.length ? 
                    <FadeIn>
                        <CustomButton disabled={isloading} value="clear" onButtonClick={onResponsesClearButtonClick}>Clear Responses</CustomButton>
                    </FadeIn> :
                    <CustomButton value="clear" visibility="hidden">Clear Responses</CustomButton>
                }
            </div>
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