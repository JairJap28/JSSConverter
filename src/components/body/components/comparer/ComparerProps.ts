import { IDialogGetJsonProps } from '../dialog-get-json/DialogGetJsonProps';

export interface IComparerProps {
    dialogJson?: IDialogGetJsonProps
}

export interface IComparerActions {
    clearDialogJson: () => void;
}

type ComparerProps = IComparerProps & IComparerActions;
export default ComparerProps;