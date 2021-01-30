import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in/sign-in-and-sign-up.component'

import './App.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth)
              userRef.onSnapshot(snapshot => {
                  this.setState({
                      currentUser: {
                          id: snapshot.id,
                          ...snapshot.data()
                      }
                  })
                  console.log(this.state)
              })
          }
          this.setState({currentUser: userAuth})
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <Router>
                <div className='app'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/sign-in' component={SignInAndSignUpPage}/>
                        <Route render={() => <h2>Page not found</h2>}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default App
