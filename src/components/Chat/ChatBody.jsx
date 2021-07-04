import React from 'react';
import useData from '../../hooks/useData';
import { useParams } from 'react-router-dom';
import ChatMessage from './ChatMessage';

function ChatBody() {
    const { roomId } = useParams();
    const { messagesInThisRoom } = useData(roomId);

    return (
        <div className="chat-body">
            {
                messagesInThisRoom && messagesInThisRoom.map(message => (
                    <ChatMessage
                        key={ message.id }
                        username={ message.data.username }
                        uid={ message.data.uid }
                        message={ message.data.message }
                        sentAt={ new Date(message.data.sentAt?.toDate()).toUTCString() }
                    />
                ))
            }
        </div>
    );
}

export default ChatBody;
