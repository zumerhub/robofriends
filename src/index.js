import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from "redux-logger";
import {thunk} from "redux-thunk";  // Corrected import statement
import "./index.css";
import App from './containers/App';
import reportWebVitals from "./reportWebVitals";
// import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// console.log('Redux Store initial state:', store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals(console.log);
