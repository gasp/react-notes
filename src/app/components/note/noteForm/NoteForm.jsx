import React, { Component, PropTypes } from 'react'
// import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import radium from 'radium'
import style from './noteForm.style'

@radium()
export class NoteForm extends Component { //eslint-disable-line
  render() {
    const { handleSubmit } = this.props
    return (
      <Paper zDepth={3}>
        <form
          style={style.form}
          onSubmit={handleSubmit}
        >
          {/* <div style={style.inputContainer}>
            <Field
              name="name"
              component={TextField}
              hintText="Nommer la note de frais"
              floatingLabelText="Titre"
              style={style.input}
            />
          </div>
          <div style={style.inputContainer}>
            <Field
              name="description"
              component={TextField}
              hintText="Decrire la note de frais"
              floatingLabelText="Description"
              style={style.input}
            />
          </div> */}
          <div style={style.inputContainer}>
            <RaisedButton
              type="submit"
              label="Submit"
              style={style.input}
            />
          </div>
        </form>
      </Paper>
    )
  }
}

NoteForm.propTypes = {
  handleSubmit: PropTypes.func,
}

NoteForm.defaultProps = {
  initialValues: {},
  submitForm: () => {},
}
