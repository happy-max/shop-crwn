import React from 'react'
import CollectionItem from "../collection-item/collection-item.component"

import './collection-preview.styles.css'
import {Link} from "react-router-dom";


const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
       <h1 className='title'>
           <Link to={`/shop/${title.toLowerCase()}`}>{title}</Link>
       </h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </div>
    </div>
)

export default CollectionPreview
