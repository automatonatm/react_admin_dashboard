import React from 'react';
import './Single.scss'
import {Chart, Navbar, Sidebar, Table} from "components";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="single__container">
                <Navbar />
                <div className="top__container">
                    <div className="left__side">
                        <h1 className="title">User Information</h1>
                        <div className="edit-button">
                            Edit
                        </div>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="item__img"/>
                            <div className="item__details">
                                <h1 className="item__details--title">Jane Doe</h1>
                                 <div className="item__details--body">
                                     <span className="item__key">Email:</span>
                                     <span className="item__value">janedoe@gmail.com</span>
                                 </div>
                                <div className="item__details--body">
                                    <span className="item__key">Phone:</span>
                                    <span className="item__value">+344 39384 94994</span>
                                </div>
                                <div className="item__details--body">
                                    <span className="item__key">Address:</span>
                                    <span className="item__value">23 Mt. Avenue Ghana</span>
                                </div>
                                <div className="item__details--body">
                                    <span className="item__key">Country:</span>
                                    <span className="item__value">USA</span>
                                </div>
                                <div className="item__details--body">
                                    <span className="item__key">Date Joined:</span>
                                    <span className="item__value">2nd June, 2020</span>
                                </div>
                                <div className="item__details--body">
                                    <span className="item__key">Account Status:</span>
                                    <span className="item__value">Active</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="right__side">
                        <Chart  title="User Spending Last 6 Months (Revenue)" aspect={3 / 1}/>
                    </div>

                </div>

                <div className="bottom__container">
                    <div className="list-container">
                        <div className="list-container__title">Latest Transactions</div>
                        <Table />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Single;
