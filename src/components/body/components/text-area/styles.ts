import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
export interface IStyleTextAreaProps {
    fullHeight?: boolean;
}

const useStyles = makeStyles<Theme, IStyleTextAreaProps>(theme => ({
    textArea: {
        height: props => props.fullHeight ? "100%" : "60vh"
    },
    textAreaContainer: {
        height: "100%"
    },
    textAreaInput: {
        height: "100% !important",
        overflow: "auto !important",
        fontFamily: '"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif'
    }
}));

export default useStyles;