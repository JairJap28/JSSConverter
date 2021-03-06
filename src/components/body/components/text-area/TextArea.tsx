import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';
import TextAreaProps from './TextAreaProps';

// Components
import ToolbarJSS from '../toolbar-text-area/Toolbar';

// Material UI
import TextField from '@material-ui/core/TextField';

const TextArea: FunctionComponent<TextAreaProps> = ({ label, displayName, value = '', toolbar, styles }): ReactElement => {
    const classes = useStyles(styles || {});
    return (
        <>
        { toolbar && <ToolbarJSS displayNameParent={displayName} />}
        <TextField
            label={label}
            multiline
            variant="outlined"
            value={value}
            fullWidth={true}
            className={classes.textArea}
            InputProps={{
                className: classes.textAreaContainer,
                classes: {
                    inputMultiline: classes.textAreaInput
                }
            }}
            />
        </>
    );
}

export default TextArea;