import React from 'react';

// styles
import './navbar.scss';

// icons
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageIcon className='icon' />
                        English
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <FullscreenExitIcon className='icon' />
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className='counter'>0</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineIcon className='icon' />
                        <div className='counter'>0</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <img
                            src='https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM='
                            alt='avatar'
                            className='avatar'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
