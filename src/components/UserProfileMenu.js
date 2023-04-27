import React from 'react';
import "./UserProfileMenu.css";

function UserProfileMenu() {
    return (
        <>
        <div className="UserProfileMenu">
            <ul>
                <li> <a href="./my-profile/personal-information">Personal Information </a></li>
                <li> <a href="./my-profile/professional-interests">Professional Interests</a> </li>
                <li> <a href="./my-profile/education">Education</a> </li>
                <li> <a href="./my-profile/experience">Experience</a> </li>
                <li> <a href="./my-profile/projects">Projects</a> </li>
                <li> <a href="./my-profile/resume">Resume</a> </li>

            </ul>
        </div>
        </>
    );
}

export default UserProfileMenu;