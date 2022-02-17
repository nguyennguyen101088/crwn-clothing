import React from "react";
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";
import './signin-and-signup.style.scss';

const SignInAndSignUpComponent = () => (
    <div className='sign-in-and-sign-up'>
        <SignInComponent />
        <SignUpComponent />
    </div>
)

export default SignInAndSignUpComponent;