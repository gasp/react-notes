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
  render() {
    // const { data, count, isLoading } = this.props
    const isLoading = this.props.isLoading
    return isLoading ? <MDSpinner /> : <MyList data={this.props.data} />
  }
}

NoteList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape()),
  fetchNote: PropTypes.func,
}
