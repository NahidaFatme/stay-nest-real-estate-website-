import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';
const Registration = () => {
    return (
        <div>
           <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold animate__animated animate__backInRight">Register to view exclusive content!</h1>
                        <p className="py-6 animate__animated animate__backInRight">Unlock a world of possibilities with our seamless experience – your gateway to personalized services and exclusive benefits!</p>
                        <h1 className="text-3xl font-bold animate__animated animate__backInRight">You can also
                        <Link to="/Login" className="text-[#ff6725] text-5xl pl-4 btn hover:bg-transparent hover:text-gray-800 border-none text-bold">
                        Login
                        </Link>
                        with your gmail account for easy access
                        </h1>
                    </div>
                    <div className="card shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__backInUp">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#ff6725] text-lg text-white">Complete Registration</button>
                        </div>
                        <br />
                        <div className="flex justify-center gap-2 px-9">
                            <p>Already have and account ? </p>
                            <Link to="/Login"className="text-sky-700 font-bold"> Login </Link>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Registration;