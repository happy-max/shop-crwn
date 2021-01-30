import React from 'react'
import CollectionItem from "../collection-item/collection-item.component"

import './collection-preview.styles.css'


const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...restValue}) => (
                    <CollectionItem key={id} {...restValue}/>
                ))}
        </div>
    </div>
)

export default CollectionPreview
