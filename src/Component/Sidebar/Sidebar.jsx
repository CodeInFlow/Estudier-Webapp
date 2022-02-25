import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/estudierlogo.png';
import BooksIcon from '@material-ui/icons/BookOutlined';
import VideoIcon from '@material-ui/icons/AirplayOutlined';
import SidebarItem from './SidebarItem';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='sidebar-logo' src={Logo}/>
            <SidebarItem text="Books" Icon={BooksIcon}/>
            <SidebarItem text="Videos" Icon={VideoIcon}/>
        </div>
    );
}

export default Sidebar;
