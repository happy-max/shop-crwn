import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.css'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault()
      const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        }catch(error){
            console.log(error)
        }
    }
    handlerChange = (event)=>{
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlerSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handlerChange={this.handlerChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handlerChange={this.handlerChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGooglesignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn