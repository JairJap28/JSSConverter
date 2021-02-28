import { action } from 'typesafe-actions';
import * as actionTypes from './systemActionTypes';

export const showDialogGetJSON = (owner: string) => {
    return action(actionTypes.OPEN_GET_JSON_DIALOG, {
        initialState: true,
        owner
    });
}

export const closeDialogGetJSON = () => {
    return action(actionTypes.CLOSE_GET_JSON_DIALOG);
}

export const addValueToComparer = (value: string) => {
    return action(actionTypes.ADD_VALUE_JSON_DIALOG, {
        initialState: false,
        value
    });
}