import { UPDATE_POKEMON, PokemonState, SystemActionTypes } from './types';

const initialState: PokemonState = {
    pokemon: null,
};

export function pokemonReducer(
    state = initialState,
    action: SystemActionTypes
): PokemonState {
    switch (action.type) {
        case UPDATE_POKEMON: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
