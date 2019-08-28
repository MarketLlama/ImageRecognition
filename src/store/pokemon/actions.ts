import { UPDATE_POKEMON, PokemonState } from './types';

export function updateSession(newState: PokemonState) {
    return {
        type: UPDATE_POKEMON,
        payload: newState,
    };
}
