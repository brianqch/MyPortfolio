import React from 'react';
import "./UserProfileFormContainer.css";


function ProjectsDiv() {
    return (
        <>
        <div className='UserProfileFormContainer' id="projectsDiv">
            <div className="formItem">
                <h6>Project Title</h6>
                <input type="text" name="Project Title" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Project Description</h6>
                <input type="text" name="Project Description<" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default ProjectsDiv;