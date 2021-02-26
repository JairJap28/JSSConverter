import { action } from 'typesafe-actions';
import * as actionTypes from './actionTypes';

export const showDialogGetJSON = () => {
    return action( actionTypes.OPEN_GET_JSON_DIALOG, { 
        initialState: true
    });
}

export const closeDialogGetJSON = () => {
    return action(actionTypes.CLOSE_GET_JSON_DIALOG, {
        initalState: false
    });
}