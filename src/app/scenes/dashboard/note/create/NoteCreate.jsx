import React, { Component } from 'react'
import { NoteForm } from '../../../../components'

export default class NoteCreate extends Component {

  handleSubmitForm = note => {
    console.log(note)
  }

  render() {
    return (
      <NoteForm onSubmit={this.handleSubmitForm} />
    )
  }
}
