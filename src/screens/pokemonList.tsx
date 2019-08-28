import React from "react";
import { StyleSheet, Text, View } from "react-native";
export interface PokemonListScreenProps {
    
}
 
export interface PokemonListScreenState {
    
}
 
class PokemonListScreen extends React.Component<PokemonListScreenProps, PokemonListScreenState> {
    constructor(props: PokemonListScreenProps) {
        super(props);
    }
    render() { 
        return ( <Text>Hello World!!!</Text> );
    }
}
 
export default PokemonListScreen;