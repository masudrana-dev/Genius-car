import React from 'react';
import Google from '../../../images/Social/google-logo-9808.png'
import Facebook from '../../../images/Social/Facebook.png'
import Github from '../../../images/Social/Github.png'
import "./Social.css"
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
            </div>
            {errorElement}
            <div className='button-style  '>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50  d-block mx-auto my-2 '>
                    <img src={Google} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
                <button className='btn btn-info w-50  d-block mx-auto my-2    '>
                    <img src={Facebook} alt="" />
                    <span className='px-2'>Facebook Sign in</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50  d-block mx-auto  '>
                    <img src={Github} alt="" />
                    <span className='px-2'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;