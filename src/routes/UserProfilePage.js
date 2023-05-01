import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfilePage.css";
import Navigation from "../components/Navigation"
import UserProfileMenu from "../components/UserProfileMenu";

function UserProfilePage() {
    let homeSec = document.getElementById("homeSection");
    homeSec.style.display = "none";

    let loginButton = document.getElementById('loginButton');
    loginButton.style.display = "none";

    return (
        <>
        <div className="UserProfilePage">
            <UserProfileMenu/>
        </div>
        </>
    )
}

export default UserProfilePage;