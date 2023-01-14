import { Route, Routes } from "react-router-dom";

import {Home } from "../Pages/Home"
import { Details } from "../Pages/Details"
import { UserProfile } from "../Pages/UserProfile"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/UserProfile" element={<UserProfile />} />




        </Routes>
    )
}