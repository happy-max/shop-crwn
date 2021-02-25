import React from 'react'

import './custom-button.style.css'

const CustomButton = ({children, isGooglesignIn, inverted, ...restValues}) => (
    <button className={`${inverted ? 'inverted' : ''}
    ${isGooglesignIn ? 'sign-in-google' : ''} custom-button`} {...restValues}>
        {children}
    </button>
)

export default CustomButton