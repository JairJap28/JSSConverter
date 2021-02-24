import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';

// Components
import TextArea from '../text-area/TextArea';

// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Comparer: FunctionComponent = () : ReactElement => {
    const classes = useStyles();
    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextArea label="JSON ONE"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextArea label="JSON TWO"/>
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
        </section>
    );
}

export default Comparer;