import React from 'react';
import "./UserProfileFormContainer.css";


function ExperienceDiv() {
    return (
        <>
        <div className='UserProfileFormContainer' id="experienceDiv">
            <div className="formItem">
                <h6>Job Title</h6>
                <input type="text" name="Job Title" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Company</h6>
                <input type="text" name="Company" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>From</h6>
                <input type="text" name="From" id="smallerInput" />
            </div>
            <div className="formItem">
                <h6>To</h6>
                <input type="text" name="To" id="smallerInput" />
            </div>
            <div className="formItem">
                <h6>Job Description</h6>
                <input type="text" name="Job Description<" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default ExperienceDiv;