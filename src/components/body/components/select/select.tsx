import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import SelectJSSProps from './SelectJSSProps';

const SelectJSS: FunctionComponent<SelectJSSProps> = (props): ReactElement => {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-from-native-simple">
                From
            </InputLabel>
            <Select
                native
                value={1}
                onChange={() => console.log('Hello')}
                label="From"
                inputProps={{
                    name: 'from',
                    id:'outlined-from-native-simple'
                }}>
            
                <option aria-label="none" value="" />
                <option value="1">SQL</option>
                <option value="2">StringBuilder</option>
                <option value="3">JSON</option>
                <option value="4">Entity</option>

            </Select>
        </FormControl>
    );
}

export default SelectJSS;