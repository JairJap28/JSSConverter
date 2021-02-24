import React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import useStyles from './styles';

// Components
import Comparer from './components/comparer/Comparer';

const Body: FunctionComponent<{}> = (): ReactElement => {
    const classes = useStyles();
    return (
        <section className={classes.body}>
            <Comparer />
        </section>
    );
}

export default Body;