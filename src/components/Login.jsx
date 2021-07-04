import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Login.css';
import { Button } from '@material-ui/core';

function Login() {
    const { login } = useAuth();

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cfV1sifLTe-1JQrHMC21jb5Otn0qI2Gb6RJXrIcghHv8bZKB8tox2KAq9-4F5vKUPoU&usqp=CAU" alt="Chat Logo" />
                <h1 className="login-text">LOGIN TO CHAT!</h1>

                <Button color="inherit" onClick={ login }>LOGIN WITH GOOGLE</Button>
            </div>
        </div>
    );
}

export default Login;
