import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../hooks/firebase.init';
// import useFirebase from '../hooks/useFirebase';


const auth = getAuth(app)
const Products = () => {
    // const {user} = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Products Components</h1>
            <h2>{user? user.displayName : 'Vot'}</h2>
        </div>
    );
};

export default Products;