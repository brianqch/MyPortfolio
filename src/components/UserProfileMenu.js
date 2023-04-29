import React from 'react';
import "./UserProfileMenu.css";
import { useState } from 'react'
import PersonalInfoDiv from './PersonalInfoDiv';
import ProfessionalInterstsDiv from './ProfessionalInterestsDiv';

const elements = [
    <div>
        <h2> Personal Info </h2>
        <PersonalInfoDiv/>
    </div>,
    <div >
        <h2> Professional Interests </h2>
        <ProfessionalInterstsDiv/>
    </div>,
    <div>
        <h2> Education </h2>
    </div>,
    <div>
        <h2> Experience </h2>
    </div>,
    <div>
        <h2> Projects </h2>
    </div>,
    <div>
        <h2> Resume </h2>
    </div>,
];

let elementNames = ["personalInfo", "profInt", "educ", "exp", "proj", "resum"];

function UserProfileMenu() {
    const [index, setIndex] = useState(0);

    function clickHandler(index) {
        return () => setIndex(index);
    }


    for (let i=0; i<elementNames.length; i++) {
        let selectedTag = document.getElementById(elementNames[i]);
        if (selectedTag != null) {
            if (i == index) {
                selectedTag.style.color = "black";
            } else {
                selectedTag.style.color = "#D9D9D9";
            }
        }
    }

    return (
        <>
        <div className="UserProfileMenu">
            <ul className="MenuSelect">
                <li> <div id="personalInfo" onClick={clickHandler(0)}>Personal Information </div></li>
                <li> <div id="profInt" onClick={clickHandler(1)}>Professional Interests</div> </li>
                <li> <div id="educ" onClick={clickHandler(2)}>Education</div> </li>
                <li> <div id="exp" onClick={clickHandler(3)}>Experience</div> </li>
                <li> <div id="proj" onClick={clickHandler(4)}>Projects</div> </li>
                <li> <div id="resum" onClick={clickHandler(5)}>Resume</div> </li>

            </ul>
            <div>
            {elements[index]}
            </div>
        </div>
        </>
    );
}

export default UserProfileMenu;