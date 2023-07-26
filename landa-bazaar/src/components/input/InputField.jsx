import React from 'react'
import './InputField.css'
function InputField(props) {
    return (
        <div className='outline-input'>
            <label >{props.label && props.label}</label>
            <input {...props} onChange={props.onChange} />
        </div>
    )
}

export default InputField
