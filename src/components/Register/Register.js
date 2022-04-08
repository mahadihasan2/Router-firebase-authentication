import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>This is Register page </h3>
            <button style={{margin:'20px'}}>Google SignIn</button>
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