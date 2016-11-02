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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <StyleRoot>
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
