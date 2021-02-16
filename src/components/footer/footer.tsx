import React, { ReactElement } from 'react';
import { FunctionComponent }  from 'react';
// Styles
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';

// Icons
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Typography } from '@material-ui/core';

export const Footer : FunctionComponent<{}> = (): ReactElement => {
    const classes = useStyles();
    return (
        <Box 
            className={classes.footer} 
            display="flex" 
            alignItems="center" 
            justifyContent="center">
            <Box>
                <Typography className={classes.footer_copyright}>
                    Copyright Jair Jimenez 2021
                </Typography>
            </Box>
            <Box marginLeft="15px">
                <CopyrightIcon className={classes.footer_icon_copyright} fontSize="small"/>
            </Box>
        </Box>
    );
}