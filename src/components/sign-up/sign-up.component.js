import React, {useState} from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.css'

const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName, email, password, confirmPassword} = userCredentials


    const handlerSubmit = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert(`Passwords don't match`)
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, {displayName})
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            alert(error)
        }
    }

    const handlerChange = event => {
        const {name, value} = event.target
        setUserCredentials({
            ...userCredentials, [name]: value
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    onChange={handlerChange}
                    value={displayName}
                    label='Display Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    onChange={handlerChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    onChange={handlerChange}
                    value={password}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    onChange={handlerChange}
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

export default SignUp