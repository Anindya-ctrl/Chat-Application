import React from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function SidebarRoom({ roomId, roomName }) {
    const { messagesInThisRoom } = useData(roomId);

    return (
        <Link to={ `/room/${ roomId }` }>
            <div className="sidebar-room">
                <Avatar />
                
                <div className="sidebar-room-info">
                    <h2>{ roomName }</h2>
                    <p>{  messagesInThisRoom[messagesInThisRoom.length - 1]?.data && `${ messagesInThisRoom[messagesInThisRoom.length - 1]?.data.username }: ${ messagesInThisRoom[messagesInThisRoom.length - 1]?.data.message }` }</p>
                </div>

                {/* <IconButton color="inherit" className="sidebar-room-delete">
                    <Delete />
                </IconButton> */}
            </div>
        </Link>
    );
}

export default SidebarRoom;
