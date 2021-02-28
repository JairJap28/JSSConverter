import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';

// Material UI
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import WrapTextIcon from '@material-ui/icons/WrapText';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import ToolTip from '@material-ui/core/Tooltip';
import { showDialogGetJSON } from '../../../../store/systemActionCreators';
import { connect } from 'react-redux';
import ToolbarProps from './ToolbarProps';
import { IToolbarActions } from './ToolbarProps';

const ToolbarJSS: FunctionComponent<ToolbarProps> = (props): ReactElement => {
    const classes = useStyles();

    const handleConnectToJsonService = () => {
        props.showDialogGetJSON(props.displayNameParent);
    }

    return (
        <Box display="flex" flexDirection="row-reverse">
            <Box>
                <ToolTip title="Format Json" arrow>
                    <Button 
                        className={classes.toolbarButton}
                        variant="contained">
                        <WrapTextIcon fontSize="small"/>
                    </Button>
                </ToolTip>
            </Box>
            <Box>
                <ToolTip title="Copy Json" arrow>
                    <Button 
                        className={classes.toolbarButton}
                        variant="contained">
                        <FileCopyIcon fontSize="small"/>
                    </Button>
                </ToolTip>
            </Box>
            <Box>
                <ToolTip title="Search Json" arrow>
                    <Button 
                        className={classes.toolbarButton}
                        variant="contained"
                        onClick={handleConnectToJsonService}>
                        <YoutubeSearchedForIcon fontSize="small"/>
                    </Button>
                </ToolTip>
            </Box>
        </Box>
    );
}

const mapActionsToProps: IToolbarActions = {
    showDialogGetJSON
}

export default connect(null, mapActionsToProps)(ToolbarJSS);