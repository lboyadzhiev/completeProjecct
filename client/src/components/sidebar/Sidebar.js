import React from 'react';

// styles
import './sidebar.scss';

// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Lucho Admin</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LIST</p>
                    <li>
                        <PersonOutlineIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <CategoryIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <ListAltIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className='title'>SERVICES</p>
                    <li>
                        <SettingsSuggestIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <EarbudsIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <FaceIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption'></div>
                <div className='colorOption'></div>
            </div>
        </div>
    );
};

export default Sidebar;
