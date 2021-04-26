import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const Todo = ({text}) => {
    return (
        <List>
            <ListItem>
                <ListItemText primary={text} secondary='Dummy deadline :alarm:' />
            </ListItem>
        </List>

    )
}

export default Todo
