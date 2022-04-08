import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='login'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/product'>Product</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;