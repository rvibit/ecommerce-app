import React from 'react';
import {AppNavigation} from '@src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from '@src/theme';
import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor={colors.primary.default} />
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
