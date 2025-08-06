import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import Home from "./Home";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import { CookiesProvider } from "react-cookie"


let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
        <CookiesProvider>
            <Navbar />

        </CookiesProvider>
    </>

)