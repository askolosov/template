import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import 'services/immutabilityService';
import { authorizationProvider } from 'services/authorizationService';
import configureStore from 'configureStore';
import Routes from 'template/Routes';
import 'scss/index.scss';

const store = configureStore();
authorizationProvider(store);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routes history={history} />
    </div>
  </Provider>
), document.getElementById('root'));
