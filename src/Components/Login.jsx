import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router-dom";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginUser, loginGoogle, loading, loginGithub } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const Gitprovider = new GithubAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Login successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Invalid email or password");
          });
    };

    const handleSigninGoogle = () => {
        loginGoogle(provider)
        .then(result => {
            const user = result.user;
            toast.success("Signed in with Google");
            
        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    };

    const handleLoginGithub = () => {
        loginGithub(Gitprovider)
        .then(result => {
            const user = result.user;
            toast.success("Signed in with Github");
        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });

    };
    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div>
           <div className="hero min-h-screen mt-12 md:mt-12 lg:mt-0">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold animate__animated animate__backInRight">Login now!</h1>
                        <p className="py-6 animate__animated animate__backInRight">Unlock a world of possibilities with our seamless login experience – your gateway to personalized services and exclusive benefits!</p>
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold animate__animated animate__backInRight">Don't have an account ? 
                        <Link to="/Registration" className="text-[#ff6725] text-3xl md:text-5xl lg:text-5xl pl-4 btn hover:bg-transparent hover:text-gray-800 border-none text-bold">
                        Register Here!
                        </Link>
                        </h1>
                    </div>
                    <div className="card shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__backInUp">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#ff6725] text-lg text-white">Login</button>
                        </div>
                        <br />
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p>or signin with</p>
                            <div className="flex gap-3 text-4xl">
                                <button onClick={handleSigninGoogle}><FcGoogle /></button>
                                <button onClick={handleLoginGithub} ><FaGithub  /></button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;