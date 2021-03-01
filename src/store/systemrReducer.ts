import { IUserInterface, ADD_VALUE_JSON_DIALOG, CLEAR_JSON_DIALOG } from './systemActionTypes';
import { OPEN_GET_JSON_DIALOG, CLOSE_GET_JSON_DIALOG } from './systemActionTypes';

const init: IUserInterface = {
    JsonComparerState: { initialState: false }
}

export const systemReducer = (state: IUserInterface = init, action: any) => {
    switch(action.type){
        case OPEN_GET_JSON_DIALOG:
            return {
                ...state,
                JsonComparerState: { 
                    ...state.JsonComparerState,
                    initialState: true,
                    owner: action.payload.owner
                }
            };
        case CLOSE_GET_JSON_DIALOG:
            return {
                ...state,
                dialogGetJsonState: { initialState: false }
            };
        case ADD_VALUE_JSON_DIALOG:
            return {
                ...state,
                JsonComparerState: {
                    ...state.JsonComparerState,
                    initialState: action.payload.initialState,
                    value: action.payload.value
                }
            };
        case CLEAR_JSON_DIALOG: 
            return {
                ...state,
                JsonComparerState: { initialState: false }
            };
        default:
            return state;
    }
}