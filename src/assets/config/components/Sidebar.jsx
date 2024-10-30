// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__profile">
                <img className='ml-14 border border-black' src="https://avatars.githubusercontent.com/u/147302681?v=4" alt="Profile" />
                <h2 className='font-mono'>Zain ul Abedin</h2>
                <p className='font-serif'>Front End Web-Developer</p>
            </div>
            <div className="sidebar__connections font-serif">
                <p>Connections 200+</p>
                <p>Grow your Network</p>
            </div>
            {/* Add other sections like Groups */}
        </aside>
    );
}

export default Sidebar;
