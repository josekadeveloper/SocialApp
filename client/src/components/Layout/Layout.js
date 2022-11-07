import React from "react";
import { Outlet } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import Header from "../Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Container className="layout">
                <Outlet />
            </Container>
        </>
    );
}