import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

// Components
import SelectJSS from './components/select/select';

const Body: FunctionComponent<{}> = (): ReactElement => {
    return (
        <div>
            <SelectJSS />
            <SelectJSS />
        </div>
    );
}

export default Body;