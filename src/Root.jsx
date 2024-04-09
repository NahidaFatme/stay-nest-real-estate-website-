import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './index.css';
import Footer from "./Components/Footer";

const Root = () => {
    return (
        <div className={`h-full bg-cover mx-auto bg-[#f9f3eb] `}>
            <div className="mx-24">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;