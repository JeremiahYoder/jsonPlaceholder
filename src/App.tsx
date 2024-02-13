import React from 'react';
import { NavigationStack } from './navigation'
import { Provider } from 'react-redux'
import { store } from './store'

function App(): React.JSX.Element {
  console.log("App.tsx")
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
}

export default App;
