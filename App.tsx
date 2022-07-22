// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import StackNavigator from './src/navigations/StackNavigator';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
