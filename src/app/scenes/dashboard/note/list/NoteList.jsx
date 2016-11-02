import React, { Component, PropTypes } from 'react'
import MDSpinner from 'react-md-spinner'
import { MyList } from '../../../../components'

export default class NoteList extends Component { //eslint-disable-line
  render() {
    // const { data, count, isLoading } = this.props
    const count = 2
    const data = [
      {
        id: 0,
        name: 'learn redux',
        description: 'ez',
        isDone: false,
      },
      {
        id: 1,
        name: 'learn reactive programming',
        description: 'ez ez',
        isDone: false,
      },
    ]
    const isLoading = false
    return isLoading ? <MDSpinner /> : <MyList count={count} data={data} />
  }
}

NoteList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape()),
  count: PropTypes.number,
}
