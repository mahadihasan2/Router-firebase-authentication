import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Register = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>This is Register page </h3>
            <button onClick={signInWithGoogle} style={{margin:'20px'}}>Google SignIn</button>
            <form action="">
                <input type="text" placeholder='Enter your name'/>
                <br>
                </br>
                <input type="email" placeholder='Enter your e-mail' />
                <br>
                </br>
                <input type="password" name="" id="" placeholder='Enter your Password'/>
                <br>
                </br>
                <button>Register Now</button>
            </form>
        </div>
    );
};

export default Register;