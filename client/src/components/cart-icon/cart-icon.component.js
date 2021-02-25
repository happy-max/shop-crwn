import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from "../../redux/cart/cart.action"

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import './cart-icon.styles.css'

const CartIcon = ({toggleCartHidden, itemsCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemsCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: (cart) => dispatch(toggleCartHidden(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)