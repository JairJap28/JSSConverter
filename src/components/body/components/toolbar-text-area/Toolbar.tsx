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

const ToolbarJSS: FunctionComponent = (): ReactElement => {
    const classes = useStyles();
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
                        variant="contained">
                        <YoutubeSearchedForIcon fontSize="small"/>
                    </Button>
                </ToolTip>
            </Box>
        </Box>
    );
}

export default ToolbarJSS;