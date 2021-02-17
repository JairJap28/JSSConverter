import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

const Header : FunctionComponent<{}> = () : ReactElement => {
    return (
        <header className="header">
            <h1>JSS Converter</h1>
        </header>
    );
}

export default Header;