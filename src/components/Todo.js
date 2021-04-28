import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Todo = (props) => {
    const [input, setInput] = useState('')
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id)
            .set({
                todo: input,
            }, { merge: true })
        setOpen(false)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h1>Open</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary='Dummy deadline :alarm:' />
                </ListItem>
                <div className="">
                    <Button style={{ padding: '5px' }} onClick={e => setOpen(true)}>Edit</Button>
                    <DeleteIcon style={{ cursor: 'pointer', }} onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                </div>

            </List>
        </>
    )
}

export default Todo
