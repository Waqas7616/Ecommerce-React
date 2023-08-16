
import { Route, Routes, } from "react-router-dom";
import React from 'react'
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./signup/Signup";

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Routing
