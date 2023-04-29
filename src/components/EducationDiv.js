import React from 'react';
import "./UserProfileFormContainer.css";


function EducationDiv() {
    return (
        <>
        <div className='UserProfileFormContainer'>
            <div className="formItem">
                <h6>School</h6>
                <input type="text" name="firstName" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>From</h6>
                <input type="text" name="lastName" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>To</h6>
                <input type="text" name="phoneNum" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Degree</h6>
                <input type="text" name="Email" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Major</h6>
                <input type="text" name="personalSum" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default EducationDiv;