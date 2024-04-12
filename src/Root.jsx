import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './index.css';
import Footer from "./Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className={`h-full bg-cover mx-auto bg-[#f9f3eb] `}>
            <div className="mx-24">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;