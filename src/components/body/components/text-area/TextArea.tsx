import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';

// Material UI
import TextField from '@material-ui/core/TextField';

const TextArea: FunctionComponent = (): ReactElement => {
    const classes = useStyles();
    return (
        <TextField
            label="JSON ONE"
            multiline
            variant="outlined"
            fullWidth={true}
            className={classes.textArea}
            InputProps={{
                className: classes.textAreaContainer,
                classes: {
                    inputMultiline: classes.textAreaInput
                }
            }}
            />
    );
}

export default TextArea;