import { useEffect, useState } from 'react'
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase.init'

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()

const useFirebase = () =>{
    const [user,setUser] = useState({})

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])

    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    // return [user,setUser]
    return {
        user,
        setUser,
        handleSignOut,
        signInWithGoogle
    }
}

export default useFirebase;