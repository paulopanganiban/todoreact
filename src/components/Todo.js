import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import db from '../firebase'

const Todo = (props) => {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='Dummy deadline :alarm:' />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
        </List>

    )
}

export default Todo
