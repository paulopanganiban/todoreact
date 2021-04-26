import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const Todo = (props) => {
    return (

        <List>
            <ListItem> 
                <ListItemText primary={props.text} secondary='Dummy deadline :alarm:' />
            </ListItem>
        </List>

    )
}

export default Todo
