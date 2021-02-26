export interface IDialogGetJsonProps {
    initialState: boolean 
}

export interface IDialogGetJsonActions {
    closeDialogGetJSON: any
}

type DialogGetJsonProps = IDialogGetJsonProps & IDialogGetJsonActions;
export default DialogGetJsonProps;