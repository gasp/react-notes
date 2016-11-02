import React, { PropTypes } from 'react'
import { Route, IndexRoute } from 'react-router'
import Dashboard from './dashboard/Dashboard'
import Home from './dashboard/home/Home'
import Note from './dashboard/note/Note'
import NoteList from './dashboard/note/list/NoteList'
import NoteEdit from './dashboard/note/edit/NoteEdit'
import NoteCreate from './dashboard/note/create/NoteCreate'

const getRoutes = () => {
  return (
    <Route path="">
      <Route path="/" component={Dashboard}>
        <IndexRoute component={Home} />
        <Route path="/note" component={Note}>
          <IndexRoute component={NoteList} />
          <Route path="/note/edit/:id" component={NoteEdit} />
          <Route path="/note/create" component={NoteCreate} />
        </Route>
      </Route>
    </Route>
  )
}

getRoutes.propTypes = {
  ctx: PropTypes.shape(),
  store: PropTypes.shape(),
}

export default getRoutes
