import { CounterActionTypes, StoreActionTypes } from './actions';
import { AppDispatcher, Action } from './dispatcher';

export type State = {
    counts: { [id: string]: number }; // Un contador por cada peleador
    pairs: { [id: string]: number }; // Un contador por pareja
    votedPairs: { [pairId: string]: boolean }; //Contador para saber si ya se voto por un peleador de la pareja
    
};

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        counts: {}, // Aquí se guardan los contadores individuales
        pairs: {}, //Contador por parejas
        votedPairs: {}, //Registra si ya se voto por una pareja
        
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
                const parsedId = parseInt(id);
                const pairId = Math.ceil(parsedId / 2); // 1-2 -> 1, 3-4 -> 2, etc.

                
                if (this._myState.votedPairs[pairId]) {
                    return; 
                }

                const currentPairCount = this._myState.pairs[pairId] || 0;

                this._myState = {
                    ...this._myState,
                    counts: {
                        ...this._myState.counts,
                        [id]: current + 1,
                    },
                    pairs: {
                        ...this._myState.pairs,
                        [pairId]: currentPairCount + 1,
                    },
                    votedPairs: {
                        ...this._myState.votedPairs,
                        [pairId]: true,
                    }
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
