import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import './sign-in.style.scss';

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({
            email: '',
            password: ''
          });
        } catch (error) {
          console.log('sign in failed', error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
      const { email, password } = this.state;
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
              <FormInput 
                name='email' 
                type='email' 
                label='Email: '
                value={email} 
                handleChange={this.handleChange} 
                required />
              <FormInput 
                name='password' 
                type='password' 
                label='Password: '
                value={password} 
                handleChange={this.handleChange}
                required />

                <div className='buttons'>
                  <CustomButton type='submit'>Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
          </form>
        </div>
      )
    }
}

export default SignInComponent;