import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart, decreaseQuantity, deleteItemFromCart} from '../../redux/cart/cart.action'
import './checkout-item.styles.css'


const CollectionItem = ({cartItem, deleteItemFromCart, addItem, decreaseQuantity}) => {
    const {imageUrl, name, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => deleteItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteItemFromCart: item => dispatch(deleteItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
