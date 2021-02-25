import { combineReducers, createStore } from 'redux';
import { reducer } from './reducer';
import { IUserInterface } from './actionTypes';

export interface IRootState {
    ui: IUserInterface
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        ui: reducer
    })
);

export default store;