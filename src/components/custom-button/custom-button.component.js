import React from 'react'

import './custom-button.style.css'

const CustomButton = ({children, isGooglesignIn, ...restValues}) => (
    <button className={`${isGooglesignIn ? 'sign-in-google' : ''} custom-button`} {...restValues}>
        {children}
    </button>
)

export default CustomButton