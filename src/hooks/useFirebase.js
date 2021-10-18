import FirebaseAuth from "../firebase/firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error,setError] = useState("")
    FirebaseAuth();
    const googleAuthProvider = GoogleAuthProvider()
    const auth = getAuth();
    // google sign in 
     const signInWithUser = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
            setError(error.message)
        })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    
    return {
        user,
        error,
        signInWithUser
    }
}
return useFirebase;