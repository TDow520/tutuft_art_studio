"use client";
import MapComponent from "./mapComponent";

export default function Page() {
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
                <div className="flex flex-col phone:w-[100%] tablet:w-[50%]">
                    <h2 className="text-2xl font-bold text-center">CONTACT</h2>
                    <form className="flex flex-col bg-slate-400 bg-opacity-40 p-[2%] rounded-md my-[3%]">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name.."
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your email.."
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something.."
                            style={{ height: "100px" }}
                        ></textarea>
                        <input
                            className="bg-yellow-300 w-[25%] my-[1%] mx-auto rounded-sm "
                            type="submit"
                            value="Submit"
                            onClick={null}
                        />
                    </form>
                </div>
            </div>
            <div className="flex flex-row phone:flex-col justify-evenly bg-emerald-900 py-[1%] w-[100%] border border-dashed border-teal-200">
                <MapComponent />
                <div className="flex flex-col my-auto w-[100%] text-yellow-200">
                    <h2 className="text-2xl font-bold text-center">LOCATION</h2>
                    <p className="font-medium text-2xl phone:text-md">
                        3447 Mcgehee Rd Suite N
                        <br />
                        MONTGOMERY, Alabama 36111
                    </p>
                    <br />
                    <br />
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-center ">
                            HOURS OF OPERATION
                        </h2>
                        <table className="font-semibold text-xl phone:text-md ">
                            <tr className="flex justify-between phone:justify-evenly">
                                <td>Monday</td>
                                <td>CLOSED</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Tuesday</td>
                                <td>CLOSED</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Wednesday</td>
                                <td>CLOSED</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Thursday</td>
                                <td>CLOSED</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Friday</td>
                                <td>1:00pm - 9:00pm</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Saturday</td>
                                <td>10:00am - 10:00pm</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>Sunday</td>
                                <td>1:00pm - 7:00pm</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
