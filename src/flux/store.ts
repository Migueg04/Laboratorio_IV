import { CounterActionTypes, StoreActionTypes } from './actions';
import { AppDispatcher, Action } from './dispatcher';

export type State = {
    counts: { [id: string]: number }; // Un contador por cada peleador
};

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        counts: {}, // Aquí se guardan los contadores individuales
    };

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return this._myState;
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case CounterActionTypes.INCREMENT_COUNT:
                if (typeof action.payload === 'string') {
                    const id = action.payload;
                    const current = this._myState.counts[id] || 0;
                    this._myState = {
                        ...this._myState,
                        counts: {
                            ...this._myState.counts,
                            [id]: current + 1,
                        },
                    };
                    this._emitChange();
                }
                break;

            case StoreActionTypes.LOAD_STATE:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        ...action.payload,
                    };
                    this._emitChange();
                }
                break;
        }
    }

    private _emitChange(): void {
        const state = this.getState();
        for (const listener of this._listeners) {
            listener(state);
        }
    }

    subscribe(listener: Listener): void {
        this._listeners.push(listener);
        listener(this.getState());
    }

    unsubscribe(listener: Listener): void {
        this._listeners = this._listeners.filter((l) => l !== listener);
    }

    persist(): void {
        localStorage.setItem('flux:state', JSON.stringify(this._myState));
    }

    load(): void {
        const persistedState = localStorage.getItem('flux:state');
        if (persistedState) {
            this._myState = JSON.parse(persistedState);
            this._emitChange();
        }
    }
}

export const store = new Store();
