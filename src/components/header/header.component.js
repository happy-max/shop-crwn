import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {HeaderContainer, LogoContainer, Options, OptionsLink} from './header.styles'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <Options>
            <OptionsLink to='/shop'>SHOP</OptionsLink>
            <OptionsLink to='/'>CONTACT</OptionsLink>
            {currentUser ? (
                <OptionsLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionsLink>
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

export default connect(mapStateToProps)(Header)
