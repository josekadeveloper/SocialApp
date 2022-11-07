import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":username" element={<User />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}
