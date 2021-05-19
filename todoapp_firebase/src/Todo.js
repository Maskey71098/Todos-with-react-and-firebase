import React from 'react'
import {list, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Modal} from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import EditIcon from '@material-ui/icons/Edit';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const handleOpen = () => {
        setOpen=(true);
    };

    const updateTodo = () => {
        // update the todo with the new input text 
        db.collection('todos').doc(props.todo.id).set({
            todo: input,
        }, {merge: true}) // basically appends
        setOpen(false);
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
            <h1>Edit your todo!</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
            <button onClick={updateTodo}>Edit Todo</button>
        </div>
        </Modal>
        <list>
            <ListItem> 
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline">
                    </ListItemText>
                    <EditIcon variant="contained" color="primary" onClick={e => setOpen(true)}>Edit</EditIcon>
                    <DeleteIcon variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</DeleteIcon>

            </ListItem>
        </list>
        </>
    )
}

export default Todo
