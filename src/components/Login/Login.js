import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,
        user,
        loading,
        error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSignIn}>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    {
                        loading && <p>Loading...</p>
                    }
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='create-new-acc'>
                    New to Ema-John <Link className='form-link' to='/signup'>Create a new account</Link>
                </p>
                <div className='form-or'>
                    <div>------------------</div>
                    <p>or</p>
                    <div>------------------</div>
                </div>
            </div>
        </div>
    );
};

export default Login;