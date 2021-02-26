import { IUserInterface } from './actionTypes';
import { OPEN_GET_JSON_DIALOG, CLOSE_GET_JSON_DIALOG } from './actionTypes';

const init: IUserInterface = {
    dialogGetJsonState: { initialState: false }
}

export const reducer = (state: IUserInterface = init, action: any) => {
    switch(action.type){
        case OPEN_GET_JSON_DIALOG:
            return {
                ...state,
                dialogGetJsonState: { initialState: action.payload.initialState }
            };
        case CLOSE_GET_JSON_DIALOG:
            return {
                ...state,
                dialogGetJsonState: { initialState: action.payload.initialState }
            };
        default:
            return state;
    }
}