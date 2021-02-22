import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import SelectJSSProps from './SelectJSSProps';
import useStyles from './styles';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';

const SelectJSS: FunctionComponent<SelectJSSProps> = (props: SelectJSSProps): ReactElement => {
    const classes = useStyles();

    const hasClearButton = Boolean(props.onClear);

    const onChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        props.onChange(event);
    }

    const onClear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(props.onClear) props.onClear(event);
    }

    return (
        <React.Fragment>
            <FormControl className={classes.selectForm} variant="outlined">
                <InputLabel htmlFor="outlined-from-native-simple">
                    {props.tag}
                </InputLabel>
                <Select
                    native
                    disabled={props.disabled}
                    value={props.value}
                    onChange={onChange}
                    label={props.tag}
                    inputProps={{
                        name: 'from',
                        id:'outlined-from-native-simple'
                    }}>
                
                    <option aria-label="none" value="" />
                    { props.options.map(opt => {    
                        return <option key={opt.key} value={opt.key}>{opt.value}</option>    
                    }) }

                </Select>
            </FormControl>
            { 
                hasClearButton && 
                <Button 
                    className={classes.selectClearButton}
                    variant="contained" 
                    onClick={onClear}
                    disabled={props.disabled}>
                    <BackspaceIcon/>
                </Button>
            }
        </React.Fragment>
    );
}

export default SelectJSS;