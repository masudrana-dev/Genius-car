import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const Registration = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate(' ');

    const navigateLogin = () => {
        navigate('/login')
    };
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log("user", user);
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }

    return (
        <div className='register-form '>
            <h1 className='text-center pt-5'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Please enter your name ' />
                <input type="email" name="email" id="" placeholder='Please enter your email ' />
                <input type="password" name="password" id="" placeholder='Please enter your password ' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                {/* <label className={agree ? 'ps-2' : ' ps-2 text-danger'} htmlFor="terms"> Accept all condition and terms</label> */}
                <label className={`ps-2  ${agree ? ' ' : 'text-danger'}`} htmlFor="terms"> Accept all condition and terms</label>
                <input disabled={!agree} className='btn-primary w-50 mx-auto mt-2' type="submit" value="Submit" />
            </form>
            <p>Do you have an account ? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;