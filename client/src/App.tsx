import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import "./index.scss";
import Main from "./pages/Main";

const App = () => (
    <Routes>
        <Route path='/' element={<Navigate to='/main' replace/>} />
        <Route path='/main' element={<Main />} />  
    </Routes>
);

export default App;
