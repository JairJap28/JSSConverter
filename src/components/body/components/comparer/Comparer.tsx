import React from 'react';
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import useStyles from './styles';
import ComparerProps from './ComparerProps';

// Redux
import { RootState } from '../../../../store/store';

// Components
import TextArea from '../text-area/TextArea';
import DialogGetJson from '../dialog-get-json/DialogGetJson';

// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { IComparerProps } from './ComparerProps';
import { connect } from 'react-redux';
import { clearDialogJson } from '../../../../store/systemActionCreators';

const Comparer: FunctionComponent<ComparerProps> = (props) : ReactElement => {
    const classes = useStyles();

    const displayNameOrigin = "COMPARER_ORIGIN";
    const displayNameDestinity = "COMPARER_DESTINITY";

    const [valueOrigin, setValueOrigin] = useState<string>('');
    const [valueDestinity, setValueDestinity] = useState<string>('');

    useEffect(() => {
        if(props.dialogJson && props.dialogJson.owner && props.dialogJson.value) {
            if(props.dialogJson.owner === displayNameOrigin){
                setValueOrigin(props.dialogJson.value);
            } else if(props.dialogJson.owner === displayNameDestinity) {
                setValueDestinity(props.dialogJson.value);
            }
            props.clearDialogJson();
        }
    }, [props]);

    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextArea label="JSON ONE" toolbar displayName={displayNameOrigin} value={valueOrigin}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextArea label="JSON TWO" toolbar displayName={displayNameDestinity} value={valueDestinity}/>
                </Grid>
            </Grid>
            <Box display="flex" className={classes.compareButton}>
                <Box flexGrow={1}>
                    <Button 
                        className={classes.compareButtonCompare}
                        fullWidth
                        variant="outlined">
                        Compare
                    </Button>
                </Box>
                <Box>
                    <Button 
                        className={classes.compareButtonClear}
                        fullWidth
                        variant="contained"
                        color="secondary">
                        Clear
                    </Button>
                </Box>
            </Box>
            <DialogGetJson />
        </section>
    );
}

const mapStateToProps = (state: RootState): IComparerProps => ({
    dialogJson: state.ui.JsonComparerState
})

const mapActionsToProps = {
    clearDialogJson
}

export default connect(mapStateToProps, mapActionsToProps)(Comparer);