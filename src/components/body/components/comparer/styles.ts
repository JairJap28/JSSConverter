import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
    compareButton: {
        width: "100%",
        marginTop: 10
    },
    compareButtonCompare: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    compareButtonClear: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
});

export default useStyles;