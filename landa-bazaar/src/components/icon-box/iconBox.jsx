import React from 'react'

function IconSquare(props) {
    return (
        <div className='icon-box d-flex justify-content-between gap-3 flex-wrap py-5'>
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
            <div className="icon-text">
                <h6 className='icon-title'>{props.title}</h6>
                <p className='icon-desc'>Free shipping on all order</p>
            </div>
        </div>
    )
}

export default IconSquare;


