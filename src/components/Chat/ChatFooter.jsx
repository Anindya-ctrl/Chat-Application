import React, { useState } from 'react';
import { DATABASE } from '../../firebaseSetup';
import { useAuth } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { InsertEmoticon, Mic } from '@material-ui/icons';

function ChatFooter() {
    const [ message, setMessage ] = useState('');
    const { currentUser } = useAuth();
    const { roomId } = useParams();

    const handleChange = event => {
        setMessage(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setMessage('');

        return DATABASE.rooms
            ?.doc(roomId)
            .collection('messages')
            .add({
                username: currentUser.displayName,
                uid: currentUser.uid,
                message,
                sentAt: DATABASE.getCurrentTimeStamp(),
            });
    }

    return (
        <div className="chat-footer">
            <IconButton color="inherit">
                <InsertEmoticon />
            </IconButton>
            <form action="">
                <input
                    type="text"
                    value={ message }
                    placeholder="Type a message..."
                    onChange={ handleChange }
                />
                <button type="submit" onClick={ handleSubmit }></button>
            </form>
            <IconButton color="inherit">
                <Mic />
            </IconButton>
        </div>
    );
}

export default ChatFooter;
