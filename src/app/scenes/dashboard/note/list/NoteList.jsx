import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import { MyList } from '../../../../components'
import * as actions from '../../../../store/actions'

const mapStateToProps = (state) => ({
  isLoading: state.note.isLoading,
  data: state.note.data,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchNote: actions.fetchNote,
  updateNote: actions.updateNote,
}, dispatch)

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class NoteList extends Component { //eslint-disable-line
  componentDidMount() {
    const { fetchNote } = this.props
    fetchNote()
  }
  handleToggle = (note) => {
    console.log(note)
    this.props.updateNote(note)
  }

  render() {
    // const { data, count, isLoading } = this.props
    const isLoading = this.props.isLoading
    if (isLoading) return <MDSpinner />
    return <MyList data={this.props.data} handleToggle={this.handleToggle} />
  }
}

NoteList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape()),
  fetchNote: PropTypes.func,
  updateNote: PropTypes.func,
}
