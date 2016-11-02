import React, { Component, PropTypes } from 'react'
import MDSpinner from 'react-md-spinner'
import { NoteForm } from '../../../../components'

export default class NoteEdit extends Component {

  handleUpdateNote = note => {
    console.log(note)
  }

  renderForm() {
    const note = {}
    return (
      <NoteForm initialValues={note} onSubmit={this.handleUpdateNote} />
    )
  }

  render() {
    const isLoading = false
    return isLoading ? <MDSpinner /> : this.renderForm()
  }
}

NoteEdit.propTypes = {
  note: PropTypes.shape(),
  isLoading: PropTypes.bool,
}
