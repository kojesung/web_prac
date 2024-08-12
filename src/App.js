import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login/Login';
import Main from './main/Main';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
