import React from 'react';

import './Header.css';

export const Header = ({ children }) => {
    return (
        <header className="Header">
            <h1 className="Header-logo">{ children }</h1>
        </header>
    );
};