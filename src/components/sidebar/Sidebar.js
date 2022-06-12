import React, {useContext} from 'react';
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import {Link} from 'react-router-dom'
import {DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {

    const  {dispatch} = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                <span className="logo">AngleAdmin</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul className="navigation">
                    <p className="navigation-title">MAIN</p>
                    <li className="navigation-item" >
                         <Link to="/">
                        <DashboardIcon className="icon" />
                        <span className="navigation-item__description">Dashboard</span>
                         </Link>
                    </li>
                    <p className="navigation-title">LISTS</p>
                    <li className="navigation-item" >
                        <Link to="/users">
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span className="navigation-item__description">Users</span>
                        </Link>
                    </li>
                    <li className="navigation-item" >
                        <StoreMallDirectoryIcon className="icon" />
                        <span className="navigation-item__description">Products</span>
                    </li>
                    <li className="navigation-item" >
                        <CreditCardIcon className="icon" />
                        <span className="navigation-item__description">Orders</span>
                    </li>
                    <li className="navigation-item" >
                        <LocalShippingIcon className="icon" />
                        <span className="navigation-item__description">Delivery</span>
                    </li>
                    <p className="navigation-title">Useful</p>
                    <li className="navigation-item" >
                        <AssessmentIcon className="icon" />
                        <span className="navigation-item__description">Stats</span>
                    </li>

                    <li className="navigation-item" >
                        <NotificationsNoneIcon className="icon" />
                        <span className="navigation-item__description">Notifications</span>
                    </li>
                    <p className="navigation-title">Service</p>
                    <li className="navigation-item" >
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span className="navigation-item__description">System Health</span>
                    </li>
                    <li className="navigation-item" >
                    <PsychologyOutlinedIcon className="icon" />
                    <span className="navigation-item__description">Logs</span>
                    </li>
                    <li className="navigation-item" >
                        <SettingsApplicationsIcon className="icon" />
                        <span className="navigation-item__description">Settings</span>
                    </li>
                    <p className="navigation-title">User</p>
                    <li className="navigation-item" >
                        <AccountCircleOutlinedIcon className="icon" />
                        <span className="navigation-item__description">Profile</span>
                    </li>
                    <li className="navigation-item" >
                        <LoginOutlinedIcon className="icon" />
                        <span className="navigation-item__description">Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
               <div className="color__option color__option--1" onClick={() => dispatch({type: "LIGHT"})}/>
               <div className="color__option color__option--2" onClick={() => dispatch({type: "DARK"})}/>
            </div>
        </div>
    );
};

export default Sidebar;
