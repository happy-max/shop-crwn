import React, {useState} from 'react'
import {connect} from 'react-redux'
import {emailSignInStart, googleSignInStart} from '../../redux/user/user.action'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.css'

const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const {email, password} = userCredentials

    const handlerSubmit = async event => {
        event.preventDefault()
        emailSignInStart(email, password)
    }
    const handlerChange = (event) => {
        const {value, name} = event.target
        setCredentials({
            ...userCredentials, [name]: value
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handlerChange={handlerChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handlerChange={handlerChange}
                    value={password}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGooglesignIn>Sign in with
                        Google</CustomButton>
                </div>
            </form>
        </div>
    )

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)