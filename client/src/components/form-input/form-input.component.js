import React from 'react'

import './form-input.style.css'

const FormInput = ({label, handlerChange, ...restValues}) => (
    <div className='group'>
        <input className='form-input' onChange={handlerChange} {...restValues}/>
        {label ? (
            <label
            className={`${
            restValues.value.length ? 'shrink' : ''
            } 
            form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
)

export default FormInput