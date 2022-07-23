// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigations/StackNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
