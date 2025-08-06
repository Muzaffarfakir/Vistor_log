import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";

export default function Sign() {
    let nav = useNavigate();
    let [email, setemail] = useState("");
    let [name, setname] = useState("");
    let [pass, setpass] = useState("");
    let reff = useRef("");
    let Ereff = useRef("");
    let Nreff = useRef("");



    return (
        <>

            <h3 className="text-center my-3 py-3 ">Sign in !</h3>
            <div style={{ height: "75vh" }} className=" w-75 m-auto my-3   form-group text-center">
                <input ref={Nreff} onChange={(e) => { setname(e.target.value) }} name="name" placeholder="Enter Name!" className="input form-control my-3 py-3" />
                <input ref={Ereff} onChange={(e) => { setemail(e.target.value) }} name="email" type="email" placeholder="Enter email!" className="input form-control my-3 py-3" />
                <input ref={reff} onChange={(e) => { setpass(e.target.value) }} name="pass" placeholder="Enter Password!" className="input form-control my-2 py-2" />
                <button onClick={transerDtaa} className="btn btn-primary m-auto my-3 ">Sign in </button>
                <p ><button onClick={() => { nav("/login") }} className="btn text-primary ">I Have account ?</button></p>
            </div>

        </>
    )

    function transerDtaa() {
        if (name.trim() === "" || email.trim() === "" || pass.trim() === "" || name.length < 5 || email.length < 10 || pass.length < 5) {
            alert(" Max 5 char Password ,  Max 10 char Name Max 15 Char Email !");
            Nreff.current.style.borderColor = "red";
            Nreff.current.placeholder = "'Minimum 5 Character'";
            Ereff.current.style.borderColor = "red";
            Ereff.current.placeholder = "'Minimum 10 Character'";
            reff.current.style.borderColor = "red";
            reff.current.placeholder = "'Minimum 5 Character'";


            return;
        }



        else {

            axios.post("http://localhost:8000/sign", { email, name, pass })
                .then((res) => {
                    if (res.data === "Email_found") {
                        alert("Email is already taken!");
                    } else if (res.data === "sucess") {
                        alert("Sign up is successful!");
                        nav("/login");
                    }
                })
                .catch(() => {
                    alert("Something went wrong!");
                });
        }
    }





}