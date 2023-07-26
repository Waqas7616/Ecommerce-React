import React from 'react'

function Signup() {
    return (
        <div className='container-fluid vh-100'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 bg-info"></div>
                    <div className="col-md-6">
                        <div className="container p-5">
                            <div className="form-data">
                                <h1 className="primary-heading">REGISTER HERE</h1>
                                <input type="email" placeholder='Enter your email' />
                                <input type="password" placeholder='Enter your Password' />
                                <input type="password" placeholder='Repeat your Password' />
                                <button className="btn btn-warning">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
