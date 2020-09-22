import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { default as theme } from './ui-kitten-custom-theme.json';
import { store } from './store'

const App = () => (
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <Provider store={store}>
      <Layout style={styles.layout}>
      </Layout>
    </Provider>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
