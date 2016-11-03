import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import { MyList } from '../../../../components'
import * as actions from '../../../../store/actions'

const mapStateToProps = (state) => ({
  isLoading: state.note.isLoading,
  data: state.note.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchNoteStart: actions.fetchNoteStart,
  fetchNoteSuccess: actions.fetchNoteSuccess
}, dispatch)

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class NoteList extends Component { //eslint-disable-line
  componentDidMount() {
    const { fetchNoteStart, fetchNoteSuccess} = this.props
    fetchNoteStart()
    window.setTimeout(() => {
      fetchNoteSuccess([
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
      ])
    },1000)
  }
  render() {
    // const { data, count, isLoading } = this.props
    const count = 2
    const isLoading = this.props.isLoading
    return isLoading ? <MDSpinner /> : <MyList count={count} data={this.props.data} />
  }
}

NoteList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape()),
  count: PropTypes.number,
  fetchNoteStart: PropTypes.func,
  fetchNoteSuccess: PropTypes.func
}
