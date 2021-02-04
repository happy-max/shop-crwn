import React from 'react'
import {withRouter} from 'react-router-dom'

import './menu-item.styles.css'

const MenuItem = ({ title, imageUrl, size, history, match}) => (
    <div className={`${size} menu-item`}
    onClick={()=>history.push(`${match.url}shop/${title}`)}
    >
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)

