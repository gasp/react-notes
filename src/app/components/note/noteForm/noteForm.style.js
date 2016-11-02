import { mediaQueries } from '../../../styles'

export default {
  form: {
    marginTop: 0,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    margin: 'auto',
    [mediaQueries.md]: {
      width: '80%',
    },
  },
  input: {
    width: '100%',
  },
}
