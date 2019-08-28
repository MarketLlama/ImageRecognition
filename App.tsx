import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import "@firebase/firestore";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import AppNavigator from './src/navigation/appNavigator';
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const store = configureStore();

class App extends React.Component {
  public async componentDidMount() {
    this._getPokemon();
  }
  public render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
  private _getPokemon = async () => {
    const querySnapshot = await db.collection("Pokemon").get();
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
    });
  };

}

export default App;
