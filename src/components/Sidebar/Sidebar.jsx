import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarSearchbar from './SidebarSearchbar';
import SidebarRoom from './SidebarRoom';
import useData from '../../hooks/useData';
import { useParams } from 'react-router-dom';
import '../../styles/Sidebar.css';

function Sidebar() {
    const { roomId } = useParams();
    const { roomList } = useData(roomId);

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarSearchbar />
            
            <div className="sidebar-rooms-list">
                {
                    roomList.map(room => (
                        <SidebarRoom key={ room.id } roomId={ room.id } roomName={ room.data.name } />
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;
