import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import { 
    GetOptionsToSelect,
    GetAllowedOptions
} from '../../helpers/DataHelper';

// Components
import SelectJSS from './components/select/select';

// Material UI
import Button from '@material-ui/core/Button';

const Body: FunctionComponent<{}> = (): ReactElement => {
    const [originVal, setOriginVal] = React.useState('');
    const [destinityVal, setDestinityVal] = React.useState('');
    const [optionsOrigin, setOptionOrigin] = React.useState(GetOptionsToSelect());
    const [optionsDetinity, setOptionDestinity] = React.useState(GetOptionsToSelect());

    const onChangeOrigin = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        let option: string = `${event.target.value}`;
        let key: string = GetAllowedOptions(option);
        setDestinityVal(key);
        setOriginVal(option);
    }

    const onChangeDestinity = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        let option: string = `${event.target.value}`;
        let key: string = GetAllowedOptions(option);
        setOriginVal(key);
        setDestinityVal(option);
    }

    const clearOptions = () => {
        setOptionOrigin(GetOptionsToSelect());
        setOptionDestinity(GetOptionsToSelect());
        setOriginVal("");
        setDestinityVal("");
    }

    return (
        <div>
            <SelectJSS 
                tag="From"
                value={originVal}
                options={optionsOrigin}
                onChange={onChangeOrigin}/>
            <SelectJSS 
                tag="To"
                value={destinityVal}
                options={optionsDetinity}
                onChange={onChangeDestinity}/>
            
            <Button variant="contained" onClick={clearOptions}>Clear</Button>
        </div>
    );
}

export default Body;