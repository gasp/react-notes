import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleRoot, Style } from 'radium'
import { reset } from './styles'

export default class App extends Component {
  getChildContext() {
    return {
      _radiumConfig: this.props.radiumConfig,
    }
  }
  render() {
    const { children, muiTheme } = this.props
    /* the {children} node is the router
       not included here because we want
       the app part to be izomorphic */
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <StyleRoot> {/* for radium */}
          <Style rules={reset} />
          {children}
        </StyleRoot>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  muiTheme: PropTypes.shape(),
  // store: PropTypes.shape(),
  radiumConfig: PropTypes.shape(),
}

App.childContextTypes = {
  _radiumConfig: PropTypes.object.isRequired,
}
