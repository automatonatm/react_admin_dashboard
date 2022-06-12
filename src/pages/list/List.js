import React from 'react';
import './List.scss'
import {Navbar, Sidebar} from "components";
import Datable from "components/dataTable/Datable";


const List = () => {
    return (
        <div className="list">
            <Sidebar />
           <div className="list__container">
               <Navbar/>
               <Datable />
           </div>
        </div>
    );
};

export default List;
