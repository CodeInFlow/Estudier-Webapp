import React from 'react';
import './SidebarItem.css';

function SidebarItem({ text, Icon }) {
    return (
        <div className='sidebaritem'>
            <div className="sidebaritem-option">
                <Icon />
                <h2>{text}</h2>
            </div>
            <hr/>
        </div>
    );
}

export default SidebarItem;
