import {AppDispatcher} from "./dispatcher"
import {State} from "./store"


export const CounterActionTypes = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
};

export const StoreActionTypes = {
    LOAD_STATE: 'LOAD_STATE',
};

export const StoreActions = {
    loadState: (state: State) => {
        AppDispatcher.dispatch({
            type: StoreActionTypes.LOAD_STATE,
            payload: state,
        });
    },
}

export const CounterActions = {
    increment: (value: string) => {
        AppDispatcher.dispatch({
            type: CounterActionTypes.INCREMENT_COUNT,
            payload: value,
        });
    },
}