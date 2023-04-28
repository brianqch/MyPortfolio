import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfilePage.css";
import Navigation from "../components/Navigation"
import UserProfileMenu from "../components/UserProfileMenu";

function UserProfilePage() {
    return (
        <>
        <Navigation/>
        <div className="UserProfilePage">
            <UserProfileMenu/>
        </div>
        </>
    )
}

export default UserProfilePage;