import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../hooks/firebase.init';
// import useFirebase from '../hooks/useFirebase';
import './Header.css'


const auth = getAuth(app)

const Header = () => {
    // const { user, handleSignOut } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div className='login'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/products'>Products</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?

                        <button onClick={() => signOut(auth)}>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
                {/* <Link to='/register'>Register</Link> */}
            </nav>
        </div>
    );
};

export default Header;