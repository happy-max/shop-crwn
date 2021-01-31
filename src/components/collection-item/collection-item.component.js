import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import {addItemToCart} from '../../redux/cart/cart.action'
import './collection-item.styles.css'


const CollectionItem = ({item, addItemToCart}) => {
    const {imageUrl, name, price} = item
    return (
        <div className='collection-item'>
            <div className='image'
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}
            > </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={item=>addItemToCart(item)}
                inverted>Add to Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
