import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { Provider } from './state/Provider';
import { initialState, recordReducer } from './state/reducer';
render(
  <Provider reducer={recordReducer} initialState={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
);
