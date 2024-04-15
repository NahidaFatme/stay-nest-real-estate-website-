import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <div className="my-12 ">
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/SxTsnzB/bg.jpg)'}}>
            <div className="hero-overlay bg-opacity-70 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Reach Us On This Address</h1>
                <p className="mb-5">123 Office Street,Suite 400, Business City, BC 12345,Country</p>
                <p className="mb-5">Email: staynest@property.com</p>
                <p className="mb-5">Phone: +77546465115</p>
                <Link to="../" className="btn bg-[#ff6725] border-none text-white font-bold">Go Back</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;