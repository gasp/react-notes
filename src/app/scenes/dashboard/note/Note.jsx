import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import style from './note.style'

class Note extends Component { //eslint-disable-line
  render() {
    const { children } = this.props
    return (
      <div>
        <Link to="/note/create" style={style.fab}>
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        {children}
      </div>
    )
  }
}

Note.propTypes = {
  children: PropTypes.node,
}

export default Note
