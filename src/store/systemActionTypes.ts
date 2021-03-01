import { IDialogGetJsonProps } from '../components/body/components/dialog-get-json/DialogGetJsonProps';

// UI
export const OPEN_GET_JSON_DIALOG = "OPEN_GET_JSON_DIALOG";
export const CLOSE_GET_JSON_DIALOG = "CLOSE_GET_JSON_DIALOG";
export const ADD_VALUE_JSON_DIALOG = "ADD_VALUE_JSON_DIALOG";
export const CLEAR_JSON_DIALOG = "CLEAR_JSON_DIALOG";

export interface IUserInterface {
    JsonComparerState: IDialogGetJsonProps
}