import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import { Header } from './src/components/common';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View >
        <Header headerText='Tech Stack' />
      </View>
    </Provider>
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
