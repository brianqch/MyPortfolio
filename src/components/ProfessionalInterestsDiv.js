import React from 'react';
import "./UserProfileFormContainer.css";


function ProfessionalInterstsDiv() {
    return (
        <>
        <div className='UserProfileFormContainer' id="professionalIntersts">
            <div className="formItem">
                <h6>Professional Intersts</h6>
                <input type="text" name="personalSum" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default ProfessionalInterstsDiv;