import React from 'react';

function SidebarItems(text, Icon) {
    return (
        <div className='sidebaritems'>
            <Icon />
            <h2>{text}</h2>
            <hr style={{width:100}}/>
        </div>
    );
}

export default SidebarItems;
