import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {signOutStart} from '../../redux/user/user.action'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {HeaderContainer, LogoContainer, Options, OptionsLink} from './header.styles'



const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <Options>
            <OptionsLink to='/shop'>SHOP</OptionsLink>
            <OptionsLink to='/'>CONTACT</OptionsLink>
            {currentUser ? (
                <OptionsLink as='div' onClick={signOutStart}>SIGN OUT</OptionsLink>
            ) : (
                <OptionsLink to='/sign-in'>SIGN IN</OptionsLink>
            )}
            <CartIcon/>
        </Options>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart: ()=>dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
