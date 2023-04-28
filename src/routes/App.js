import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import UserProfilePage from './UserProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/my-profile" element={<UserProfilePage/>}/>
        </Routes>
    )
}

export default App;