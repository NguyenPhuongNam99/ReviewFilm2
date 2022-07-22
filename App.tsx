// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
