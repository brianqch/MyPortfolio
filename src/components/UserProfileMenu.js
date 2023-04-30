import React from 'react';
import "./UserProfileMenu.css";
import { useState } from 'react'
import PersonalInfoDiv from './PersonalInfoDiv';
import ProfessionalInterstsDiv from './ProfessionalInterestsDiv';
import EducationDiv from './EducationDiv';
import ExperienceDiv from './ExperienceDiv';
import ProjectsDiv from './ProjectsDiv';
import ResumeDiv from './ResumeDiv';

const elements = [
    <div>
        <PersonalInfoDiv/>
    </div>,
    <div >
        <ProfessionalInterstsDiv/>
    </div>,
    <div>
        <EducationDiv/>
    </div>,
    <div>
        <ExperienceDiv/>
    </div>,
    <div>
        <ProjectsDiv/>
    </div>,
    <div>
       <ResumeDiv/>
    </div>,
];

let elementNames = ["personalInfo", "profInt", "educ", "exp", "proj", "resum"];

function UserProfileMenu() {
    const [index, setIndex] = useState(-1);

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
        <div class="userProfileHeaderContainer">
        <span class="dot"></span>
        <h1 id="userProfileHeading"> User Profile </h1>
        </div>
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