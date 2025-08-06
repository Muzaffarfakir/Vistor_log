import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Sign from "./Sign";
import Profile from "./Profile";
import { useCookies } from "react-cookie";
import BookingPage from "./BookingPage";

export default function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies(["acces_token"]);

    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-dark text-white">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <h5 className="mx-3 my-3 text-white">MSR hotel</h5>
                        <div className="d-flex align-items-center mx-3">
                            <Link className="text-decoration-none text-white mx-2" to="/">Home</Link>
                            {
                                !cookies.acces_token ? (
                                    <Link className="text-decoration-none text-white mx-2" to="/Login">Login</Link>
                                ) : (
                                    <Link className="text-decoration-none text-white mx-2" to="/profile">Profile</Link>
                                )
                            }
                            <Link hidden className="text-decoration-none text-white mx-2" to="/sign">Sign</Link>
                            <Link hidden className="text-decoration-none text-white mx-2" to="/BookingPage">BookingPage</Link>

                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/BookingPage" element={<BookingPage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>

                <div className="position-relative">
                    <Footer />
                </div>
            </BrowserRouter>

        </>
    );
}
