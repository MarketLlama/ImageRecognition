import { Pokemon } from "../../types/pokemon";

// Describing the shape of the system's slice of state
export interface PokemonState {
    pokemon: Pokemon;
}

// Describing the different ACTION NAMES available
export const UPDATE_POKEMON = 'UPDATE_POKEMON';

interface UpdatePokemonAction {
    type: typeof UPDATE_POKEMON;
    payload: PokemonState;
}

export type SystemActionTypes = UpdatePokemonAction;
