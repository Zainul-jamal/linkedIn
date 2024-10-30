// src/pages/Profile.js
import React from 'react';
import '../pages/Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__info">
                <img src="profile-pic.jpg" alt="Profile" />
                <h2>John Doe</h2>
                <p>Software Engineer</p>
                <div className="profile__details">
                    <h3>Experience</h3>
                    <p>Company XYZ - Software Developer</p>
                    <h3>Skills</h3>
                    <p>React, Node.js, JavaScript</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
