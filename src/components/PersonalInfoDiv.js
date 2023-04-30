import React from 'react';
import "./UserProfileFormContainer.css";


function PersonalInfoDiv() {
    return (
        <>
        <div className='UserProfileFormContainer'>
            <div className="formItem">
                <h6>First Name</h6>
                <input type="text" name="firstName" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Last Name</h6>
                <input type="text" name="lastName" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Phone Number</h6>
                <input type="text" name="phoneNum" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Email</h6>
                <input type="text" name="Email" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Personal Summary</h6>
                <input type="text" name="personalSum" id="bigInput" />
            </div>
            
        </div>
        </>
    );
}

export default PersonalInfoDiv;