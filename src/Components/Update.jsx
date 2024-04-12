import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
    const { user, updateUserProfile, setUser} = useContext(AuthContext);
    const [name, setName, loading] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [email, setEmail] = useState(user.email);
    const handleUpdate = e => {
        e.preventDefault();
        updateUserProfile(name, photoURL)
        .then((result) => {
            
            const updatedUser = {
                ...user,
                displayName: name,
                photoURL: photoURL,
            };
            setUser(updatedUser);
            toast.success("Profile updated");
            
          })
          .catch((error) => {
            console.log(error.message);
          });
        }
    return (
        <div>
            <div className="min-w-screen max-h-1/2 bg-transparent flex items-center justify-center px-5 py-10">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div className="md:flex w-full ">
                    <div className=" md:block w-1/2  bg-indigo-500 pl-24 pt-24">
                        <img src={user?.photoURL || "https://i.ibb.co/6yJypwW/Open-Peeps-Bust.png"}className=" rounded-full w-3/4 h-3/2 border-[15px] border-orange-500"  />
                    </div>
                    <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Profile Update</h1>
                            <p>update profile information</p>
                        </div>
                        <form onSubmit={handleUpdate}>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>

                                        <input 
                                        type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 placeholder-opacity-900 placeholder-black font-semibold" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input 
                                        type="email" 
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 placeholder-opacity-900 placeholder-black font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Photo URL</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input 
                                        type="text" 
                                        name="photo" 
                                        value={photoURL}
                                        onChange={(e) => setPhotoURL(e.target.value)}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 placeholder-opacity-900 placeholder-black font-semibold"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-[#ff6725] hover:bg-[#76391f]  text-white rounded-lg px-3 py-3 font-semibold">Save Change</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;