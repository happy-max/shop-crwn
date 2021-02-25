import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cart.selectors'
import CollectionItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import './checkout.styles.css'

const CheckoutPage = ({cartItems,totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">Product</div>
            <div className="header-block">Description</div>
            <div className="header-block">Quantity</div>
            <div className="header-block">Price</div>
            <div className="header-block">Remove</div>
        </div>
        {cartItems.map(cartItem=> <CollectionItem key={cartItem.id} cartItem={cartItem}/>)}
        <div className="total">
            TOTAL: ${totalPrice}
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
)
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
