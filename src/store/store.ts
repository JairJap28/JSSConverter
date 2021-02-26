import { combineReducers, compose, createStore, StoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IUserInterface } from './actionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
    ui: IUserInterface
}

const rootReducer = combineReducers({
    ui: reducer
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