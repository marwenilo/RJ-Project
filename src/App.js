import React from 'react';
import Route from "./route"
import { Provider } from 'react-redux';
import store from './Js/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Route />
    </div>
    </Provider>
  );
}

export default App;
