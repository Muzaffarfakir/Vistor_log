import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import img from '../src/hotel.png';
import img1 from '../src/img1.jpg';
import img2 from '../src/img2.jpg';
import img3 from '../src/img3.jpg';
import img4 from '../src/img4.jpg';
import img5 from '../src/img5.jpg';
import img6 from '../src/img6.jpg';
import img7 from '../src/img7.jpg';
import img8 from '../src/img8.jpg';
import img9 from '../src/img9.jpg';
import img10 from '../src/img10.jpg';




export default function Home() {
    return (
        <>
            <h1 className="my-5 mx-3 col-md-6 ">
                MSR  Hotel...
            </h1>
            <div className=" conatiner d-flex  flex-row row align-items-center mx-3 my-3  ">
                <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img} className=" img-fluid img-hover-zoom rounded shadow d-flex w-50 h-50 m-auto my-1 py-3 text-center " />
                <p className="text-wrap ">
                    Welcome to MSR Hotel, a sanctuary of sophistication and peace, located in the vibrant heart of the city.
                    Our hotel is designed for modern travelers who appreciate quality, elegance, and personal attention.
                    Whether you’re a business professional, a leisure traveler, or on a romantic getaway, we are here to make your stay exceptional.

                    From the moment you step into our welcoming lobby, you’ll experience the warmth of genuine hospitality and the promise of a comfortable, unforgettable stay.                </p>
            </div>

            <h4 className="my-2 mx-3">
                Food & Dining Experience
            </h4>
            <div className=" conatiner d-flex flex-row row align-items-center  mx-1  ">
                <p className=" wrap-text col-md-12 ">
                    We offer a wide range of stylish and spacious accommodations to meet every guest’s need.
                    Choose from our elegantly furnished Standard Rooms, Deluxe Suites, or our exclusive Executive Rooms, all equipped with:

                    (1) Luxurious bedding and linen

                    (2) Smart TVs with international channels

                    (3) High-speed Wi-Fi access

                    (4) Air conditioning & heating

                    (5) Work desk and reading lights

                    (6) Mini-bar and coffee station

                    (7) Electronic safe for valuables

                    Every room is a blend of classic comfort and modern convenience, ensuring a peaceful rest at the end of each day.
                    At MSR Hotel, we believe that hospitality is not just about providing a room — it's about creating lasting memories. Our staff is trained to go above and beyond to make your visit special, whether it’s arranging local tours, serving up your favorite meals, or assisting with business needs.
                    Indulge your senses with our exquisite in-house dining options.
                    Our multi-cuisine restaurant serves freshly prepared dishes ranging from traditional Indian flavors to continental and Chinese favorites.

                    Enjoy:

                    (1)    A lavish breakfast buffet

                    (2)  Handcrafted lunch and dinner menus

                    (3)  24/7 in-room dining

                    (4) Daily chef specials

                    (5)  A cozy café for coffee, snacks, and desserts

                    We also offer vegetarian, vegan, and Jain food options on request.

                </p>
                <div className="d-flex mx-1 col-md-12">
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} className=" img-fluid rounded shadow float-start me-3 mb-3 img-hover-zoom rounded shadow w-50 h-50" src={img1} />
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} className=" img-fluid rounded shadow float-start me-3 mb-3 img-hover-zoom rounded shadow w-50 h-50" src={img10} />

                </div>


            </div>
            <h4 className="my-2 mx-3">
                Rooms & Suites
            </h4>
            <div className=" conatiner d-flex flex-row row align-items-center mx-3 ">
                <div className="d-flex mx-1 col-md-12">
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img2} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img6} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />
                </div>

                <p className="text-wrap col-md-12 ">
                    MSR Hotel is equipped with premium amenities to enhance your stay:

                    Fully-equipped fitness center

                    Rooftop lounge with city views

                    Business center with printing and conference services

                    Spacious banquet halls for weddings, parties, and events

                    Dedicated kids’ play area

                    Free high-speed Wi-Fi in all rooms and public areas

                    Complimentary bottled water and tea/coffee in all rooms

                    Airport pickup and drop-off (on request)

                    On-site travel desk for tour bookings and transportation
                </p>
            </div>

            <h4 className="my-2 mx-3">
                Facilities & Amenities
            </h4>
            <div className=" conatiner d-flex  row align-items-center mx-1 ">
                <p className="text-wrap  col-md-12">
                    Guests can enjoy a range of facilities including:

                    (1)  24/7 front desk & room service

                    (2)  High-speed Wi-Fi throughout the property

                    (3)  An in-house multi-cuisine restaurant

                    (4) Conference & banquet facilities

                    (5) Free parking and airport shuttle (on request)

                    At MSR Hotel, we believe in creating memorable experiences through warm hospitality, attention to detail, and a guest-first approach. Book your stay with us and discover a world of comfort and care.

                </p>
                <div className="d-flex mx-1 col-md-12">
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img3} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img7} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />

                </div>

            </div>
            <h4 className="my-2 mx-3">
                Cleanliness & Hygiene
            </h4>
            <div className=" conatiner d-flex  row align-items-center flex-row mx-1 ">
                <div className="d-flex mx-1 col-md-12">
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img4} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img9} className=" d-flex rounded shadow w-50 h-75 m-auto my-3 mx-2 text-center "   />

                </div>
                <p className="text-wrap ">
                    Your safety is our top priority.
                    We follow enhanced sanitation and hygiene protocols throughout the property:

                    (1)  Daily deep-cleaning of all rooms and common areas

                    (2) Sanitization of high-touch points every few hours

                    (3) Contactless check-in and check-out available

                    (4) Regular health checks for staff

                    (5)Use of hospital-grade disinfectants

                    Hospitality With Heart

                    At MSR Hotel, we don't just offer rooms—we offer experiences.
                    Our trained and courteous staff is always ready to assist you with:

                    (1) Personalized room arrangements

                    (2) Travel recommendations

                    (3) Event planning support

                    (4)   24/7 concierge services

                    From welcome drinks on arrival to thoughtful turndown service, we take pride in every detail.

                </p>

            </div>
            <h4 className="my-2 mx-3">
                Lovely Gesture
            </h4>
            <div className=" conatiner d-flex row align-items-center  flex-row mx-2 ">
                <p className="text-wrap ">
                    We understand the needs of business travelers:

                    (1) Conference rooms with audio-visual equipment

                    (2) High-speed secure Wi-Fi

                    (3) Comfortable workspace in every room

                    (4)  Private meeting lounges

                    (5)  Photocopying, faxing, and printing services

                    Ask about our long-stay packages and corporate tie-ups.

                    Weddings & Events
                    Make your special day unforgettable at MSR Hotel.
                    With elegant banquet spaces, customizable décor, and in-house catering, we host:

                    (1) Weddings & receptions

                    (2)Birthday parties

                    (3) Corporate events & seminars

                    (4)  Social gatherings

                    Let our team handle every detail so you can celebrate stress-free.

                </p>
                <div className="d-flex mx-1 col-md-12">
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img5} className=" d-flex rounded shadow w-50 h-50 m-auto my-3 mx-2 text-center "  />
                    <img onMouseLeave={(e) => { e.target.style.transform = "scale(1)" }} onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)" }} src={img7} className=" d-flex rounded shadow w-50 h-25 m-auto my-3 mx-2 text-center "  />

                </div>

            </div>




        </>
    )

}