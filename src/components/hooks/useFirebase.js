import { useEffect, useState } from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from './firebase.init'

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()

const useFirebase = () =>{
    const [user,setUser] = useState({})

    useEffect(()=>{

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
        signInWithGoogle
    }
}

export default useFirebase;