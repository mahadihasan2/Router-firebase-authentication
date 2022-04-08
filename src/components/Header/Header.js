import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user} = useFirebase()
    return (
        <div className='login'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/product'>Product</Link>
               { 
               user.uid 
               ? 
               
               <button>Sign Out</button>
               :
               <Link to='/login'>Login</Link>
               }
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;