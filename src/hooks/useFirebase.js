import FirebaseAuth from "../firebase/firebase.init";
import { GoogleAuthProvider,signInWithPopup, getAuth,onAuthStateChanged,signInWithEmailAndPassword  ,signOut,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
FirebaseAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [datelis, setDatelis] = useState([])
    const [doctor, setDoctor] = useState([])
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // google sign in
    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider);
        
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError("")
            }).catch(error => {
                setError(error.message)
            })
    }
    // 
    const signInuser = (email, password) => {
        
        signInWithEmailAndPassword (auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }

    // 
    // sign in part of the
    const signout = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }
    // 
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                setUser(user)
            } 
        })
    }, [])
   
        useEffect(() => {
            fetch('../services.json')
                .then(res => res.json())
                .then(data=>setDatelis(data))
        }, [])
    
    useEffect(() => {
        fetch('../Doctors.json')
            .then(res => res.json())
            .then(data=>setDoctor(data))
    }, [])
    
    return {
        signout,
        datelis,
        createUser,
        signInuser,
        error,
        setError,
        user,
        doctor,
        googleSignIn,
    }
}
export default useFirebase;