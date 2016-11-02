import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'
import configureStore from './app/store'
import getRoutes from './app/scenes/routes'
import App from './app/App'

// for material-ui
injectTapEventPlugin()

const browserHistory = useRouterHistory(createHistory)({
  basename: '/',
})

const store = configureStore()

const routes = getRoutes({ store })
const rootEl = document.getElementById('app-container')

const mountApp = () => {
  render(
    <AppContainer>
      <App
        radiumConfig={{ userAgent: 'all' }}
        muiTheme={getMuiTheme(lightBaseTheme)}
      >
        <Router
          history={browserHistory}
          // routes={routes}
        >
          {routes}
        </Router>
      </App>
    </AppContainer>,
    rootEl
  )
}

if (module.hot) {
  module.hot.accept('./app/App.jsx', () => {
    require('./app/App')

    mountApp()
  })

  // fix hot module reload issue with react router
  module.hot.accept('./app/scenes/routes', () =>
    setImmediate(() => {
      unmountComponentAtNode(rootEl)
      mountApp()
    })
  )
}

mountApp()
