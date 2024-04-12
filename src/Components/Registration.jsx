import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import 'animate.css';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showpassword, setShowPassword] = useState(false);

    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.URL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if (password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)){
            toast.error("Password should contain Uppercase characters");
            return;
        }
        else if (!/[a-z]/.test(password)){
            toast.error("Password should contain Lowercase characters");
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUserProfile(name, photoURL)
            .then( () => {
                toast.success("Registration successful");
                console.log(user);
            })
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
    };
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
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="URL" placeholder="URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative flex">
                        <input 
                            type={showpassword ? "text" : "password"} 
                            name="password" 
                            placeholder="password" 
                            className="input input-bordered grow" required />
                        <span onClick={ () => setShowPassword(!showpassword)} className="absolute right-4 text-2xl top-3">
                            {
                                showpassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                        </div>
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