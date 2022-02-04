import React from 'react';
import Logo from '../../assets/logo.svg';
import BooksIcon from '@material-ui/icons/BookOutlined';
import VideoIcon from '@material-ui/icons/AirplayOutlined'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Logo className='sidebar-logo'/>
            <SidebarItems text="Books" Icon={BooksIcon}/>
            <SidebarItems text="Videos" Icon={VideoIcon}/>
        </div>
    );
}

export default Sidebar;
