import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import SelectJSSProps from './SelectJSSProps';

const SelectJSS: FunctionComponent<SelectJSSProps> = (props: SelectJSSProps): ReactElement => {
    const onChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        props.onChange(event);
    }
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-from-native-simple">
                From
            </InputLabel>
            <Select
                native
                value={props.value}
                onChange={onChange}
                label="From"
                inputProps={{
                    name: 'from',
                    id:'outlined-from-native-simple'
                }}>
            
                <option aria-label="none" value="" />
                { props.options.map(opt => {    
                    return <option value={opt.key}>{opt.value}</option>    
                }) }

            </Select>
        </FormControl>
    );
}

export default SelectJSS;