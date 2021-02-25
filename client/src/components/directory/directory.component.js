import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../menu-item/menu-item.component'
import {selectSectionsDirectory} from '../../redux/directory/directory.selector'

import './directory.styles.css'


const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...restValue}) => (
            <MenuItem key={id} {...restValue}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector ({
    sections: selectSectionsDirectory
})
export default connect(mapStateToProps)(Directory)
