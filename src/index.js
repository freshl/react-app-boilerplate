import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

import { requireAuth } from './services/requireAuth'
import App from './containers/App'
import Test from './containers/Test'
import Login from './containers/Login'

// Add reducer to store
const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

// create synced history
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/test" component={requireAuth(Test)} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)
