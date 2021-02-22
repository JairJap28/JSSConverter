import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

import { 
    GetOptionsToSelect
} from '../../helpers/DataHelper';

// Components
import SelectJSS from '../shared/select/select';

// Material UI
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Header : FunctionComponent<{}> = () : ReactElement => {
    const [originVal, setOriginVal] = React.useState('');
    const [optionsOrigin, setOptionOrigin] = React.useState(GetOptionsToSelect());
    const [option, setOption] = React.useState(false);

    const onChangeOrigin = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown}>) => {
        let option: string = `${event.target.value}`;
        setOriginVal(option);
    }

    const clearOptions = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOptionOrigin(GetOptionsToSelect());
        setOriginVal("");
    }

    const onChangeOption = () => {
        setOption(!option);
    }

    return (
        <React.Fragment>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <header className="header">
                        <Typography variant="h3">JSS Converter</Typography>
                        <Typography variant="subtitle1">
                            The converter you were waiting for
                        </Typography>
                    </header>
                </Box>
                <Box>
                    <Grid container alignItems="center">
                        <Grid item>Convertion</Grid>
                        <Grid item>
                            <Switch
                                checked={option}
                                onChange={onChangeOption}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </Grid>
                        <Grid item>Comparation</Grid>
                    </Grid>
                    <SelectJSS 
                        tag="Convertion"
                        disabled={option}
                        value={originVal}
                        options={optionsOrigin}
                        onChange={onChangeOrigin}
                        onClear={clearOptions}/>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Header;