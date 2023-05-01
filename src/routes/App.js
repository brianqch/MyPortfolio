import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserProfilePage from './UserProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Templates from './Templates';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/my-profile" element={<UserProfilePage/>}/>
            <Route exact path="/home" render={() => {window.location.href="index.html"}} />
            <Route path="/templates" element={<Templates/>}/>
        </Routes>
    )
}

export default App;