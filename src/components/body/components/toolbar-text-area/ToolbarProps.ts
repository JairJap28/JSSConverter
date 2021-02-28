export interface IToolbarProps {
    displayNameParent: string,
}

export interface IToolbarActions {
    showDialogGetJSON: (owner: string) => void;
}

type ToolbarProps = IToolbarProps & IToolbarActions;
export default ToolbarProps;