import React from 'react';
import { SearchOutlined } from '@material-ui/icons';

function SidebarSearchbar() {
    return (
        <div className="sidebar-search-bar">
            <div className="sidebar-search-bar-input">
                <SearchOutlined />
                <input type="text" placeholder="Search or start a chat" />
            </div>
        </div>
    );
}

export default SidebarSearchbar;
