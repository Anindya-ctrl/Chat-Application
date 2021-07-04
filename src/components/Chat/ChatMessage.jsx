import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function ChatMessage({ username, uid, message, sentAt }) {
    const { currentUser } = useAuth();

    return (
        <p className={ `chat-message ${ currentUser.uid === uid && 'chat-message-user-view' }` }>
            <span className="chat-message-username">{ username }</span>
            { message }
            <span className="chat-message-timestamp">{ sentAt }</span>
        </p>
    );
}

export default ChatMessage;
