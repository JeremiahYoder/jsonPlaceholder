import React from 'react';
import { AppNavigator } from './navigation'
import { Provider } from 'react-redux'
import { store } from './store'

function App(): React.JSX.Element {
  console.log("App.tsx")
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
