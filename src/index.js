import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';
import { Provider } from 'react-redux'
import './App.css';
import { fetchVideos } from './actions' ;
// import mainVideoComponent from './mainVideoComponent'

// store.dispatch(fetchVideos('snarky puppy'))


// store.dispatch(fetchVideos('searchTerm'))
ReactDOM.render(
  <Provider store={store}>
    <App  />
   
  </Provider>,
  document.getElementById('root')
);




