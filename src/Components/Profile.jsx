import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { ImProfile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = () => {
    const { user} = useContext(AuthContext);
    useEffect(() => {
        document.title = "User Profile";
    }, []);
    return (
        <div className="flex flex-col md:flex-col lg:flex-row w-full my-10 ">
            <div class="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto">
            <figure><img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-xl md:text-3xl lg:text-4xl font-bold">Welcome <span className="text-[#ff6725]">{user?.displayName || "none"}</span></h2>
                <div className="flex flex-col gap-4 text-lg md:text-xl lg:text-2xl font-semibold grow mt-12 mb-3">
                    <div className="flex gap-3 items-center"><ImProfile />{user?.displayName || "none"}</div>
                    <div className="flex gap-3 items-center"><MdEmail />{user?.email || "none"}</div>
                    <div className="flex gap-3 items-center">
                        <MdInsertPhoto />
                        <span className="whitespace-normal break-all">{user?.photoURL || "none"}</span>
                    </div>
                </div>
                <div class="card-actions justify-end">
                <Link to="/Update" class="btn bg-[#ff6725] text-white">Make changes to profile </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;