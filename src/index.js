import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Redirect from="*" to={"/"} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
