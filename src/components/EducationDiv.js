import React from 'react';
import { useState } from 'react';
import "./UserProfileFormContainer.css";


function EducationDiv() {
    const [educations, setEducations] = useState([
        <div className='UserProfileFormContainer' id="educationDiv">
            <div className="formItem">
                <h6>School</h6>
                <input type="text" name="School" id="smallInput" />
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
                <h6>Degree</h6>
                <input type="text" name="Degree" id="smallInput" />
            </div>
            <div className="formItem">
                <h6>Major(s) / Minor(s)</h6>
                <input type="text" name="Major(s) / Minor(s)" id="smallInput" />
            </div>
        </div>
    ])
    return (
        <>
        {educations}
        <div id="addEdButtonContainer">
        <button id="addEdButton" onClick={() => setEducations((educations) => [...educations, 
            <div className='UserProfileFormContainer' id="educationDiv">
                <div className="formItem">
                    <h6>School</h6>
                    <input type="text" name="School" id="smallInput" />
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
                    <h6>Degree</h6>
                    <input type="text" name="Degree" id="smallInput" />
                </div>
                <div className="formItem">
                    <h6>Major(s) / Minor(s)</h6>
                    <input type="text" name="Major(s) / Minor(s)" id="smallInput" />
                </div>
            </div>
            ])}> Add education </button>
        </div>
        </>
    );
}

export default EducationDiv;