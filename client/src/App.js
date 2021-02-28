import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.action'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import './App.css'


const App = ({ checkUserSession, currentUser}) => {
    useEffect(() => {
       checkUserSession()
    }, [checkUserSession])

    return (
        <Router>
            <div className='app'>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/checkout' component={CheckoutPage}/>
                    <Route path='/sign-in'
                           render={() => currentUser ? (
                               <Redirect to='/'/>
                           ) : (
                               <SignInAndSignUpPage/>
                               )
                           }/>
                    <Route render={() => <h2>Page not found</h2>}/>
                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    checkUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
