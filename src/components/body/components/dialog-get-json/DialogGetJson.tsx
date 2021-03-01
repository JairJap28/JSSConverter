import React from 'react';
import { 
    FunctionComponent, 
    ReactElement,
    useState,
    useEffect
} from 'react';
import useStyles from './styles';

// Redux
import { connect } from 'react-redux';
import DialogGetJsonProps, { IDialogGetJsonProps, IDialogGetJsonActions } from './DialogGetJsonProps';
import { closeDialogGetJSON, addValueToComparer } from '../../../../store/systemActionCreators';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { RootState } from '../../../../store/store';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

// Material UI Icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ReactJson from 'react-json-view';

const Transition = React.forwardRef((
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>) => {
        return <Slide direction="up" ref={ref} {...props}/>;
    })


const DialogGetJson : FunctionComponent<DialogGetJsonProps> = (props) : ReactElement => {
    const classes = useStyles();
    
    const [open, setOpen] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('');
    const [response, setReponse] = useState<string>('');
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const clearStates = () => {
        setOpen(false);
        setUrl('');
        setReponse('');
        setShowPreview(false);
    }

    const handleClose = () => {
        clearStates();
        props.closeDialogGetJSON();
    }

    const handleAdd = () => {
        clearStates();
        props.addValueToComparer(response);
    }

    useEffect(() => {
        setOpen(Boolean(props.initialState));
    }, [props.initialState]);

    const connectToSource = () => {
        setLoading(true);
        fetch(url)
            .then(data => data.json())
            .then(data => {
                setReponse(JSON.stringify(data));
                setLoading(false);
            })
            .catch(err => {
                console.warn(err);
                setLoading(false);
            });
    }

    const changeUrl = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    return (
        <Dialog 
            open={open} 
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="form-dialog-get-json">
                <DialogTitle>
                    <Box display="flex">
                        <Box flexGrow={1}>Connect to JSON Source</Box>
                        { loading && <Box><CircularProgress size={20}/></Box>}
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, add the URL of a GET Rest API that allows
                        us to get as response a JSON file.

                        We will bring the results in here for you.
                    </DialogContentText>
                    <Box display="flex" alignItems="center">
                        <Box flexGrow={1}>
                            <TextField
                            autoFocus
                            margin="dense"
                            label="JSON Source"
                            type="text"
                            value={url}
                            onChange={changeUrl}
                            InputProps={{
                                className: classes.dialogInput
                            }}
                            fullWidth/>
                        </Box>
                        { response &&
                            <Box>
                                {
                                    !showPreview && 
                                    <IconButton aria-label="Preview JSON Response" onClick={() => setShowPreview(true)}>
                                        <VisibilityIcon />
                                    </IconButton>
                                }
                                {
                                    showPreview &&
                                    <IconButton aria-label="Hide preview JSON Response" onClick={() => setShowPreview(false)}>
                                        <VisibilityOffIcon />
                                    </IconButton>
                                }
                            </Box>
                        }
                    </Box>
                    { 
                        showPreview && 
                        <div className={classes.dialogPreviewContainer}>
                            <ReactJson src={JSON.parse(response)} theme="bright:inverted" enableClipboard={false}/>
                        </div>
                    }
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={connectToSource}>
                        Connect
                    </Button>
                    {   
                        response &&
                        <Button color="default" onClick={handleAdd}>
                            Add
                        </Button>
                    }
                </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = (state: RootState): IDialogGetJsonProps => ({
    initialState: state.ui.JsonComparerState?.initialState
});

const mapActionsToProps: IDialogGetJsonActions = {
    closeDialogGetJSON,
    addValueToComparer
}

export default connect(mapStateToProps, mapActionsToProps)(DialogGetJson);
