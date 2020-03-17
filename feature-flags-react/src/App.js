import React from 'react';
import { connect } from 'react-redux'
import './App.css'

export function App({ isAwesomeFeatureEnabled }) {
  const message = isAwesomeFeatureEnabled ? 'Feature flag enabled':'Feature flag disabled';
  return (
    <div className="App">{message}</div>
  );
}

const mapStateToProps = (state) => ({
  ...state.featureFlags
})

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer;
