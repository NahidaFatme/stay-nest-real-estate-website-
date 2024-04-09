import { Link, NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa6"
const Navbar = () => {
    return (
        <div>
            <div className="navbar pt-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-40 bg-zinc-100">
                        <li><NavLink to="/">Home</NavLink></li>   
                    </ul>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                    <FaHotel className="text-2xl"/>
                    <a className="text-2xl lg:text-3xl font-bold text-color">Stay Nest</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                    <li className="text-xl bg-transparent hover:text-[#ff6725] rounded-xl"><Link to="/">Home</Link></li>
                    
                    </ul>
                </div> 
                <div className="navbar-end flex flex-col lg:flex-row gap-2 lg:gap-0">
                    <a className="btn bg-[#ff6725] lg:mr-4 text-white text-base lg:text-lg font-semibold">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;