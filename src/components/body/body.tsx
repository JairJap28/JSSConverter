import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';

// Components
import TextArea from './components/text-area/TextArea';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Body: FunctionComponent<{}> = (): ReactElement => {
    const classes = useStyles();
    return (
        <section className={classes.body}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextArea/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextArea/>
                </Grid>
            </Grid>
            <Button 
                className={classes.bodyButton} 
                variant="outlined">
                Comparar
            </Button>
        </section>
    );
}

export default Body;