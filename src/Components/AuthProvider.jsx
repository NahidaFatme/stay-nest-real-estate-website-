import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import {signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app); 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const loginGoogle = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    
    const logOut = ( ) =>{
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
          })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return () => {
            unSubscribe ();
        }
    },[])

    const authInfo = { user, createUser, loginUser, loginGoogle, logOut, updateUserProfile };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
