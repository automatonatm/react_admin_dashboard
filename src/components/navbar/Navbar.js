import React, {useContext} from 'react';
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import {DarkModeContext} from "../../context/darkModeContext";



const Navbar = () => {
    const  {dispatch} = useContext(DarkModeContext)
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." className="search__input"/>
                    <SearchOutlinedIcon className="icon icon-search" />
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">
                        <LanguageOutlinedIcon  className="icon"/>
                        <span className="navbar__item--description">English</span>
                    </div>
                    <div className="navbar__item">
                        <DarkModeOutlinedIcon onClick={() => dispatch({type: "TOGGLE"})}  className="icon"/>
                    </div>
                    <div className="navbar__item">
                        <FullscreenExitOutlinedIcon  className="icon"/>
                    </div>
                    <div className="navbar__item">
                        <NotificationsNoneIcon  className="icon"/>
                        <div className="navbar__item--counter">1</div>
                    </div>
                    <div className="navbar__item">
                        <ChatBubbleOutlineIcon  className="icon"/>
                        <div className="navbar__item--counter">5</div>
                    </div>
                    <div className="navbar__item">
                        <ListIcon  className="icon"/>
                    </div>
                    <div className="navbar__item">
                        <div className="user__profile">
                            <img
                                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="avatar"
                            />
                        </div>
                    </div>
                   {/* <div className="navbar__item">
                        <SettingsOutlinedIcon className="icon"/>
                    </div>
                    <div className="navbar__item">
                        <InfoOutlinedIcon color="disabled" className="icon icon--info"/>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
