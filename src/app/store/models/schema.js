import { Schema, arrayOf } from 'normalizr'

export const userSchema = new Schema('user', {
  idAttribute: '_id',
})

export const noteSchema = new Schema('note', {
  idAttribute: '_id',
})

noteSchema.define({
  owner: userSchema,
})

export const userSchemaArray = arrayOf(userSchema)
export const noteSchemaArray = arrayOf(noteSchema)
