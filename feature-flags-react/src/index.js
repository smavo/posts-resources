import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ffService from './ff-service';
import App from './App';

let client = '';
async function updateFF() {
  const isAwesomeFeatureEnabled = await client.getValueAsync("isAwesomeFeatureEnabled",  false);
  const payload = { isAwesomeFeatureEnabled }; 
  store.dispatch({ type: 'FF_UPDATE', payload });
}

client = ffService.create(updateFF);
updateFF();

render(
  <Provider store={store}>
    <App /> 
  </Provider>, document.getElementById('root')
);
