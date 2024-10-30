// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import './Home.css';

function Home() {
    return (
        <div className="home ">
            <Header />
            <div className="home__body ">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </div>
    );
}

export default Home;
