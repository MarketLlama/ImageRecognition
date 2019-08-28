import { createStore, combineReducers, applyMiddleware } from 'redux';

//Reducers
import { pokemonReducer } from './pokemon/reducers';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {

    const store = createStore(
        rootReducer,
    );

    return store;
}
