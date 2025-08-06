import React from "react";
import { useNavigate } from "react-router-dom";
export default function Footer() {
    let nav = useNavigate();

    return (
        <>
            <nav className=" min-vh-100 
            flex-column flex bg-dark  text-white  footer  ">
                <div className=" my-3  text-center ">
                    <h3 className="  my-3 ">MSR HOTEL</h3>
                    <p className="text-center my-3 mx-5">
                        <b>
                            Welcome to MSRHotel, where comfort meets luxury. Located in the heart of Latur, our hotel offers world-class amenities, top-tier hospitality, and unforgettable experiences for both leisure and business travelers.                        </b>
                    </p>
                    <hr />
                    <h6 className="text-center mx-3">Register Now !</h6>
                    <button className=" btn btn-primary mx-3" onClick={()=>{nav("/login")}}>Login</button>
                    <button className=" btn btn-primary mx-3" onClick={()=>{nav("/sign")}}>Sign in</button>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-center gap-4">

                        <div className="d-flex mx-3 text-center">

                            <svg onClick={Fclick} style={{ width: "50px", height: '50px', background: 'whitesmoke' }} className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg>
                            <p className="">
                                <b>
                                    Stay connected with us on Facebook for updates, offers, and more!


                                </b>
                            </p>
                        </div>

                        <div className="d-flex mx-3">
                            <svg onClick={Wclick} style={{ width: "50px", height: '50px', background: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>

                            <p>
                                <b>
                                    Chat with us on WhatsApp — quick support, booking help & more!
                                </b>
                            </p>
                        </div>
                        <div className="d-flex mx-3">
                            <svg onClick={Iclick} style={{ width: "50px", height: '50px', background: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>

                            <p>
                                <b>
                                    Follow us on Instagram for stunning views and behind-the-scenes moments.
                                </b>
                            </p>
                        </div>

                        <div className="d-flex mx-3">
                            <svg onClick={Xclick} style={{ width: "50px", height: '50px', background: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM457.1 180L353.3 298.6L475.4 460L379.8 460L305 362.1L219.3 460L171.8 460L282.8 333.1L165.7 180L263.7 180L331.4 269.5L409.6 180L457.1 180zM419.3 431.6L249.4 206.9L221.1 206.9L392.9 431.6L419.3 431.6z" /></svg>
                            <p>
                                <b>
                                    Stay updated on X (Twitter) - news, tips & trends from our hot
                                </b>
                            </p>

                        </div>

                    </div>


                </div>
                <p className=" py-2 my-3  text-center ">
                    <b>
                        © 2025 All Copyright Reserverd By H0tEl0.com
                    </b>
                </p>

            </nav>




        </>
    )



    //js part here 
    function Iclick() {
        window.open("https://www.instagram.com/_00muzaffar/")
    }
    function Fclick() {
        window.open("https://www.facebook.com/muzaffar.fakir.9");


    }
    function Wclick() {
        window.open("https://wa.link/sllczu")
    }
    function Xclick() {
        window.open("https://x.com/FakirMuzaffar");
    }

}