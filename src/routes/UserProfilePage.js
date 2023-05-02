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

    let templatesButton = document.getElementById('templatesButton');
    templatesButton.style.display = "block";

    let myProfileButton = document.getElementById('myProfileButton');
    myProfileButton.style.display = "block";
    myProfileButton.className = "nav-item active";

    let homeButton = document.getElementById('homeButton');
    homeButton.style.display = "none";

    let signOutButton = document.getElementById('signOutButton');
    signOutButton.style.display = "block";



    return (
        <>
        <div className="UserProfilePage">
            <UserProfileMenu/>
        </div>
        </>
    )
}

export default UserProfilePage;