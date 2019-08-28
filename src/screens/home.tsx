import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export interface HomeProps {}

export interface HomeState {
  pokemonList?: string[];
}

class HomeScreen extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = { pokemonList: null };
  }
  public render() {
    const { pokemonList } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app! Hello World</Text>
        {pokemonList
          ? pokemonList.map(p => {
              return <Text>{p}</Text>;
            })
          : null}
      </View>
    );
  }
}

export default HomeScreen;
