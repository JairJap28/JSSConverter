export interface IDialogGetJsonProps {
    initialState: boolean,
    value?: string,
    owner?: string
}

export interface IDialogGetJsonActions {
    closeDialogGetJSON: () => void;
    addValueToComparer: (value: string) => void;
}

type DialogGetJsonProps = IDialogGetJsonProps & IDialogGetJsonActions;
export default DialogGetJsonProps;