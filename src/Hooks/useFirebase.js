import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
import initializeAuthentication from '../Components/Firebase/Firebase.initialize';

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()
    const signinUsingGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
    }
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("Sign out successful")
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [])
    return {
        user,
        signinUsingGoogle,
        logOut
    }
};

export default useFirebase;