import React, { useEffect, useState } from "react";
import img1 from "../src/img11.jpg"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Profile.css"
import axios from "axios";

export default function Profile() {
    let nav = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["acces_token"]);
    let [d, setd] = useState([]);
    let [load, setlaod] = useState(true);


    useEffect(() => {
        let email = localStorage.getItem("email");
        // axios.post("http://localhost:8000/get_data",{email}).then((res) => res.json()).then((data) => {
        //     setd(data[0].users)
        //     console.log(d);
        // })
        axios.post("http://localhost:8000/get_data", { email }).then((res) => {
            console.log(res.data.users.length)
            setd(res.data.users)
            if (res.data.users.length === 0) {
                setlaod(false);

            }
        })

    }, []);
    function logout() {
        removeCookie("acces_token");
        localStorage.clear();
        nav("/login");

    };
    function delet(id) {
        let i = localStorage.getItem("id");
        console.log(i, id)
        axios.post(`http://localhost:8000/del/`, { id, i }).then((res) => {
            if (res.data.success) {
                setd((prev) => prev.filter((el) => el._id !== id));

            }

        });
        //  window.location.reload(true);

    }

    return (
        <>
            <div className="profile-container">
                <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.04)" }} className=" profile-img d-flex h-50 w-75 border-top border-2 m-auto my-3  py-1  img-fluid  shadow-lg p-1 mb-5 bg-body-tertiary rounded " src={img1} />
            </div>
            <div className="d-flex float-left justify-content-end ">
                <button onClick={logout} className="btn btn-danger mx-1 my-3 py-1"> Logout</button>
                <button onClick={(e) => { nav("/BookingPage") }} className=" float-right d-flex   btn btn-primary my-3 mx-2 p-1">
                    Book Room
                </button>
            </div>
            <div className="card mx-3 my-3">
                <h3 className="my-3 mx-3">Customer_Basic_details!</h3>
                <div className="card-body mx-3 my-3">
                    {!load ? (<h5 className="text-center  my-1">Not Found !</h5>) : (null)}
                    {
                        d.map((e, key) => {
                            return <div>
                                ( {key += 1} )
                                <p> User_Name : {e.user_name}</p>
                                <p> User_age : {e.user_age}</p>
                                <p> User_MN  : {e.user_MN}</p>
                                <p>User_Rooms :  [{e.initNum + ","}]{e.ConRoom}</p>
                                <button onClick={(el) => { delet(e._id) }} className="btn btn-danger">Delete</button>
                                <hr />


                            </div>
                        })
                    }
                </div>

            </div>

        </>
    )
}