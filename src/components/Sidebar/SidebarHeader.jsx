import React from 'react';
import { DATABASE } from '../../firebaseSetup';
import { useAuth } from '../../contexts/AuthContext';
import { Avatar, IconButton } from '@material-ui/core';
import { Add, ExitToApp, MoreVert } from '@material-ui/icons';

function SidebarHeader() {
    const { currentUser, logout } = useAuth();

    const createNewRoom = () => {
        const newRoomName = prompt('Enter your chat name:');

        if(newRoomName) {
            DATABASE.rooms.add({
                name: newRoomName,
                createdAt: DATABASE.getCurrentTimeStamp(),
            });
        }
    }

    return (
        <div className="sidebar-header">
            <Avatar src={ currentUser?.photoURL } />

            <div className="sidebar-header-icons">
                <IconButton color="inherit" onClick={ createNewRoom }>
                    <Add />
                </IconButton>
                <IconButton color="inherit" onClick={ logout }>
                    <ExitToApp />
                </IconButton>
                <IconButton color="inherit">
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    );
}

export default SidebarHeader;
