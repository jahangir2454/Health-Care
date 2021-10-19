import FirebaseAuth from "../firebase/firebase.init";
import { GoogleAuthProvider,signInWithPopup, getAuth,onAuthStateChanged,createUserWithEmailAndPassword ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
FirebaseAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [datelis, setDatelis] = useState([])
    const [doctor, setDoctor] = useState([])
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // google sign in
    const googleSignIn = () => {
        signInWithPopup(auth,googleProvider)
            .then(result => {
                setUser(result.user)
        })
    }
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
        setEmail,
        signout,
        setPassword,
        datelis,
        user,
        doctor,
        googleSignIn,
    }
}
export default useFirebase;