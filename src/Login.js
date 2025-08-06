import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie"
export default function Login() {
    let [email, setemail] = useState("");
    let [pass, setpass] = useState("");
    let [_, setCookies] = useCookies();
    let reff = useRef("");
    let Ereff = useRef("");

    let nav = useNavigate();
    return (
        <>
            <h3 className="text-center my-3 py-3 ">Login !</h3>
            <div style={{ height: "75vh" }} className=" w-75 m-auto my-3   form-group text-center">
                <input ref={Ereff} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter email!" className="input form-control my-3 py-3" />
                <input ref={reff} onChange={(e) => { setpass(e.target.value) }} placeholder="Enter Password!" className="input form-control my-2 py-2" />
                <button onClick={login} className="btn btn-primary m-auto my-3 ">Login</button>
                <p><button onClick={signgoes} className="btn text-primary">I Don't Have account?</button></p>
            </div>
        </>
    )
    function signgoes() {
        nav("/sign");

    }

    function login() {
        if (email === "" || pass === "" || email.length < 10) {
            alert("Wrong Credintails! ");
            Ereff.current.style.borderColor = "red";
            Ereff.current.placeholder = "'Wrong Email'";
            reff.current.style.borderColor = "red";
            reff.current.placeholder = "'Wrong Password'";
        } else {


            axios.post("http://localhost:8000/login", { email, pass }).then((res) => {
                if (res.data === "er") {
                    alert("No Email,Password Found!");
                } else {
                    if (res.data.mes === "valid") {
                        nav("/profile");
                        setCookies("acces_token", { token: res.data.token, expire: "24hr" });
                        let d = localStorage.setItem("id", res.data.dataa._id);
                        let email=localStorage.setItem("email",res.data.dataa.email)
                    }
                    else if (res.data.mes === "invalid") {
                        alert("Invalid Credintails ! ")
                    }
                }
            });

        }
    }
}


