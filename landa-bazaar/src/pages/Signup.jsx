import React from 'react'

function Signup() {
    return (
        <div className="container">
            <input type="text" placeholder='fname' />
            <input type="text" placeholder='sname' />
            <input type="text" placeholder='mail' />
            <input type="text" placeholder='pass' />
            <input type="text" placeholder='cpass' />
            <input type="text" placeholder='phone' />
            <button className="btn btn-warning">Signup</button>
        </div>
    )
}

export default Signup
