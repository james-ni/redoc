import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import RedocPage from './RedocPage/RedocPage';
import SelectApiPage from './SelectApiPage/SelectApiPage';
import AppFooter from './AppFooter/AppFooter';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route exact path="/" component={SelectApiPage} />
      <Route path="/:api" component={RedocPage} />
      <AppFooter/>
    </div>
  </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
