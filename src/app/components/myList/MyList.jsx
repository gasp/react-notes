import React, { PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List'
import Toggle from 'material-ui/Toggle'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'

export const MyList = ({ data, handleToggle }) => (
  <List>
    {data.map((note, index) => (
      <div key={index}>
        <ListItem
          primaryText={note.name}
          rightToggle={<Toggle onToggle={() => handleToggle(note)} toggled={note.isDone} />}
        />
        <Link to={`/note/edit/${note.id}`}>
          <IconButton>
            <ModeEdit />
          </IconButton>
        </Link>
        <IconButton onTouchTap={() => console.log('remove')}>
          <Delete />
        </IconButton>
      </div>
    ))}
  </List>
)

MyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  handleToggle: PropTypes.func,
}
