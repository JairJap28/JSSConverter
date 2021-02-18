import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import { 
    GetOptionsToSelect,
    GetAllowedOptions
} from '../../helpers/DataHelper';

// Components
import SelectJSS from './components/select/select';

// Entities
import SelectJSSProps from './components/select/SelectJSSProps';

const Body: FunctionComponent<{}> = (): ReactElement => {
    const [originVal, setOriginVal] = React.useState('');
    const [destinityVal, setDestinityVal] = React.useState('');
    const [optionsOrigin, setOptionOrigin] = React.useState(GetOptionsToSelect());
    const [optionsDetinity, setOptionDestinity] = React.useState(GetOptionsToSelect());

    const onChangeOrigin = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        let option: string = `${event.target.value}`;
        setOptionDestinity(GetAllowedOptions(option));
        setOriginVal(option);
    }

    const onChangeDestinity = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        let option: string = `${event.target.value}`;
        setOptionOrigin(GetAllowedOptions(option));
        setDestinityVal(option);
    }

    return (
        <div>
            <SelectJSS 
                value={originVal}
                options={optionsOrigin}
                onChange={onChangeOrigin}/>
            <SelectJSS 
                value={destinityVal}
                options={optionsDetinity}
                onChange={onChangeDestinity}/>
        </div>
    );
}

export default Body;