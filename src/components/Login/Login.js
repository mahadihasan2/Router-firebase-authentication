import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>This is logIn Section</h3>
            <button onClick={signInWithGoogle}>Sign In Google</button>
            <div>
            <form action="">
                <input type="email" placeholder='Enter your e-mail' />
                <br>
                </br>
                <input type="password" name="" id="" placeholder='Enter your Password'/>
                <br>
                </br>
                <button>Login</button>
            </form>
            </div>
        </div>
    );
};

export default Login;