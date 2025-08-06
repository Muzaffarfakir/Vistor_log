import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function BookingPage() {
    let [Abtns, setAbtns] = useState([1, 52, 33, 4, 5, 46, 8, 9, 10, 56, 12, 13, 104, 105, 160, 181, 109, 20, 29, 22, 23, 40, 61, 26, 27]);
    let [NAbtns, setNAbtns] = useState([101, 2, 3, 6, 7, 11, 15, 14, 16, 18]);
    let [coutn, setcount] = useState(1);
    let [name, setname] = useState("")
    let [age, setage] = useState("");
    let [number, setnumber] = useState("");
    let [initNum, setinitNum] = useState([]);
    let [ConRoom, setConRoom] = useState("");
    let [load, setload] = useState(false);
    let nav = useNavigate();



    function func(el, e) {

        setAbtns((prev) => prev.filter(ell => ell !== el));
        setNAbtns((prev) => [...prev, el]);
        setcount((prev) => prev += 1);
        setinitNum((prev) => [...prev, el])



    }
    function sendextradata(e) {
        e.preventDefault();
        let getData = localStorage.getItem("id");
        if (!name || !number || !age || !initNum) {
            alert("ALL Fields Mandotory")
            setload(false);
            return;
        }
        else {
            axios.post("http://localhost:8000/ext", { name, number, age, initNum, getData, ConRoom }).then((res) => {
                console.log(res);
                nav("/profile")
                setload(true);
            });
            return;
        }
    }
    return (
        <>
            <div className="card  my-3 mx-3 p-3">
                <h4 className="">Book Room Here !</h4>
                <div className="card-body my-2 mx-2">
                    <input onChange={(e) => { setname(e.target.value) }} type="text" className="input-group my-3 input form-control" name="name" placeholder="enter name for Booking !" />
                    <input onChange={(e) => { setage(e.target.value) }} type="number" name="age" className=" my-3 form-control" placeholder="enter age for Booking !" />
                    <input onChange={(e) => { setnumber(e.target.value) }} type="number" className="input-group my-3 input form-control" name="mobile" placeholder="Enter A Mobile Number " />
                    <select onChange={(e) => { setConRoom(e.target.value) ; console.log(ConRoom) }}>
                        <option value={"AC"}>
                            AC
                        </option>
                        <option>
                            NON-AC
                        </option>
                    </select>
                    <h5 className="mx-5">Availabels!</h5>
                    {<b>Maximum limit 3 booking per person </b>}
                    <div className=" d-flex flex-wrap  w-100 h-50 border-2  container my-3 mx-3">
                        {Abtns.map((el, key) => {
                            return <div className=" d-flex flex-wrap text-center align-content-around   row row-cols-auto flex-wrap " >
                                <button disabled={
                                    coutn >= 4
                                } onClick={(e) => { func(el, e) }} className="d-flex text-center btn btn-success flex-wrap mx-3 border-2 rounded-circle align-content-around  col" style={{ width: '80px', height: "60px" }}>{el}</button>
                            </div>
                        })}
                    </div>
                    <hr />
                    <h5 className="mx-5">Not Availabels!</h5>
                    <div className=" d-flex flex-wrap  w-100 h-50 border-2  container my-3 mx-3">
                        {NAbtns.map((el) => {
                            return <div className="  d-flex flex-wrap text-center align-content-around   row row-cols-auto flex-wrap " >
                                <button className="d-flex text-center btn btn-danger flex-wrap mx-3 border-2 rounded-circle align-content-around  col" style={{ width: '80px', height: "60px" }}>{el}</button>
                            </div>
                        })}
                    </div>
                </div>
            </div >
            <button disabled={!load ? false : true} onClick={sendextradata} className="btn btn-primary d-flex mx-3 my-3">Save</button>



            <div className="card mx-3 my-3 py-3">
                <h4 className="mx-3 my-2">
                    Preview!
                </h4>
                <div className="card-body mx-3 my-3 py-3 ">
                    <p>Name:<b>{name}</b></p>
                    <p>Age:<b>{age}</b></p>
                    <p>Number:<b>{number}</b></p>
                    <p>Rooms Booked : <b>{initNum + ","}{ConRoom}</b></p>



                </div>
            </div>


        </>
    )


}