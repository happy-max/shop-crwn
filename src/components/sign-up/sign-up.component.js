import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.css'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert(`Passwords don't match`)
        }
        try{
           const {user} = await auth.createUserWithEmailAndPassword(
               email,
               password
           )
            await createUserProfileDocument(user, {displayName})
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        }catch(error){
           alert(error)
        }
    }
    handlerChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handlerSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        onChange={this.handlerChange}
                        value={displayName}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        onChange={this.handlerChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        onChange={this.handlerChange}
                        value={password}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        onChange={this.handlerChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp