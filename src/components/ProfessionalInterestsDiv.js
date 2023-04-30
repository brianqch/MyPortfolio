import React from 'react';
import "./UserProfileFormContainer.css";


function ProfessionalInterstsDiv() {
    return (
        <>
        <div className='UserProfileFormContainer' id="professionalInterestsDiv">
            <div className="formItem">
                <h6>Professional Interests</h6>
                <input type="text" name="personalSum" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default ProfessionalInterstsDiv;