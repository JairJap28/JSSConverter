import React from 'react';
import { 
    FunctionComponent, 
    ReactElement,
    useState
} from 'react';

// Redux
import { connect } from 'react-redux';
import DialogGetJsonProps, { IDialogGetJsonProps } from './DialogGetJsonProps';
import { IUserInterface } from '../../../../store/actionTypes';
import { closeDialogGetJSON } from '../../../../store/actionCreators';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { IDialogGetJsonActions } from './DialogGetJsonProps';
import { RootState } from '../../../../store/store';



const Transition = React.forwardRef((
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>) => {
        return <Slide direction="up" ref={ref} {...props}/>;
    })


const DialogGetJson : FunctionComponent<DialogGetJsonProps> = (props) : ReactElement => {
    console.log(props);
    const handleClose = () => {
        props.closeDialogGetJSON();
    }

    return (
        <Dialog 
            open={props.initialState} 
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="form-dialog-get-json">
                <DialogTitle>Connect to JSON Source</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, add the URL of a GET Rest API that allows
                        us to get as response a JSON file.

                        We will bring the results in here for you.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="JSON Source"
                        type="text"
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Connect
                    </Button>
                    <Button color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = (state: RootState): IDialogGetJsonProps => ({
    initialState: state.ui.dialogGetJsonState?.initialState
});

const mapActionsToProps: IDialogGetJsonActions = {
    closeDialogGetJSON
}

export default connect(mapStateToProps, mapActionsToProps)(DialogGetJson);
