"use client";
import MapComponent from "./mapComponent";
import { useState } from "react";

const About = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const opHours = [
        { day: "Monday", hours: "CLOSED" },
        { day: "Tuesday", hours: "CLOSED" },
        { day: "Wednesday", hours: "CLOSED" },
        { day: "Thursday", hours: "CLOSED" },
        { day: "Friday", hours: "1:00pm - 9:00pm" },
        { day: "Saturday", hours: "10:00am - 10:00pm" },
        { day: "Sunday", hours: "1:00pm - 7:00pm" }
    ];

    const displayHours = () => {
        return opHours.map((day, index) => {
            return (
                <tbody key={index}>
                    <tr className="flex justify-between">
                        <td>{day.day}</td>
                        <td>{day.hours}</td>
                    </tr>
                </tbody>
            );
        })
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            console.log(response);

            if (response.ok) {
                console.log("Email sent successfully");
                setFormData({ name: "", email: "", message: "" }); // Clear the form
            } else {
                console.log("Error sending email");
            }
        } catch (error) {
            console.error("Error sending email", error);
        }
    };

    return (
        <div className="flex flex-col h-[95%]">
            <div className="mx-auto p-[2%] my-[2%] bg-emerald-900 phone:w-[100%] tablet:w-[65%] text-yellow-200">
                <h1 className="font-extrabold text-3xl text-center mb-[2%]">
                    ALL ABOUT TUTUFT
                </h1>
                <p className="text-lg">
                    At TuTuft Art Studio, we are dedicated to bringing out your
                    inner creativity! We offer a wide range of craft classes
                    including tufting, canvas painting, and seasonal workshops
                    like candle making and perfume making. Our classes cater to
                    all skill levels, providing an enjoyable and educational
                    experience. With our experienced instructors, you can master
                    the essentials as well as advanced techniques. Join us on
                    this delightful journey into the world of crafting!
                </p>
            </div>

            {/* this is where the user can send an email to the owner */}
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col phone:w-[100%] w-[70%] ">
                    <h2 className="text-2xl font-bold text-center text-yellow-200">
                        CONTACT
                    </h2>
                    <form className="flex flex-col bg-slate-400 bg-opacity-40 p-[2%] rounded-md my-[3%] text-left">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name.."
                            className="text-black font-semibold bg-slate-300 bg-opacity-100 p-[1%] rounded-md"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your email.."
                            value={formData.email}
                            className="text-black font-semibold bg-slate-300 bg-opacity-100 p-[1%] rounded-md"
                            onChange={handleChange}
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something.."
                            style={{ height: "100px" }}
                            className="text-black font-semibold bg-slate-300 bg-opacity-100 p-[1%] rounded-md"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <input
                            className="bg-gold-500 w-[15%] my-[1%] mx-auto text-emerald-700 font-bold rounded-md bg-opacity-70 hover:bg-opacity-100"
                            type="submit"
                            value="Submit"
                            onClick={handleSubmit}
                        />
                    </form>
                </div>
            </div>
            <div className="flex flex-row phone:flex-col justify-evenly bg-emerald-900 py-[1%] w-[100%]">
                <div className="leaflet-wrap my-auto ml-[1%]">
                    <MapComponent />
                </div>
                <div className="flex flex-col my-auto w-[100%] text-yellow-200 ml-[1%]">
                    <h2 className="text-2xl font-bold text-center">LOCATION</h2>
                    <p className="font-medium text-2xl phone:text-md">
                        3447 Mcgehee Rd Suite N
                        <br />
                        MONTGOMERY, Alabama 36111
                    </p>
                    <br />
                    <br />
                    <div className="flex flex-col mr-[2%]">
                        <h2 className="text-2xl font-bold text-center ">
                            HOURS OF OPERATION
                        </h2>
                        <table className="font-semibold text-xl phone:text-md ">
                            <tbody>
                                <tr className="flex justify-between mb-[2%]">
                                    <td>Day</td>
                                    <td>Hours</td>
                                </tr>
                            </tbody>
                            {displayHours()}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
