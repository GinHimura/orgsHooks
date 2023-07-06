import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/Home";

function App() {
  return <SafeAreaView style={ estilo.tela }> 
             <Home/>
          </SafeAreaView>
}

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
  }
});

export default App;