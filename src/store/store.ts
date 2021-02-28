import { combineReducers, compose, createStore } from 'redux';
import { systemReducer } from './systemrReducer';
import { IUserInterface } from './systemActionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
    ui: IUserInterface
}

const rootReducer = combineReducers({
    ui: systemReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers: typeof compose = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore<IRootState, any, any, any>(
    rootReducer,
    composeEnhancers()
);

export default store;