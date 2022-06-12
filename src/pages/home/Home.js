import React from 'react';
import './Home.scss'
import {Chart, Featured, Navbar, Sidebar, Table, Widget} from "components";


const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="list-container">
                    <div className="list-container__title">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
