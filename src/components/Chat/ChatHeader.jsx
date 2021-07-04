import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DATABASE } from '../../firebaseSetup';
import useData from '../../hooks/useData';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, ClearAll, MoreVert } from '@material-ui/icons';

function ChatHeader() {
    const { roomId } = useParams();
    const [ currentRoomName, setCurrentRoomName ] = useState();
    const { messagesInThisRoom } = useData(roomId);

    useEffect(() => {
        if(roomId) {
            return DATABASE.rooms.doc(roomId).onSnapshot(snapshot => setCurrentRoomName(snapshot.data()?.name));
        }
    }, [ roomId ]);

    const deleteChat = () => {

    }

    return (
        <div className="chat-header">
            <Avatar />

            <div className="chat-header-room-info">
                <h2>{ currentRoomName }</h2>
                <p>{ messagesInThisRoom[messagesInThisRoom.length - 1]?.data && `Last seen at ${ new Date(messagesInThisRoom[messagesInThisRoom.length - 1]?.data.sentAt?.toDate()).toUTCString() }` }</p>
            </div>

            <div className="chat-header-icons">
                <IconButton color="inherit">
                    <SearchOutlined />
                </IconButton>
                <IconButton color="inherit" onClick={ deleteChat }>
                    <ClearAll />
                </IconButton>
                <IconButton color="inherit">
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatHeader;
