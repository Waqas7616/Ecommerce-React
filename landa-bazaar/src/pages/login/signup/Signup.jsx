import React, { useState } from 'react'
import InputField from '../../../components/input/InputField'

import './signup.css'
import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
function Signup() {
    const [errMessage, setErrMessage] = useState('');
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmission = () => {
        if (!formData.email || !formData.fname || !formData.password || !formData.confirmPassword) {
            setErrMessage('All Fields are required')
        } else if (formData.password !== formData.confirmPassword) {
            setErrMessage('Passwords do not match. Try Again')
        } else {
            setErrMessage('')
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
            console.log(res);
        }).catch((error) => { console.log(error) })
    }



    return (
        <div className='container-fluid vh-100  d-flex justify-content-center align-items-center' style={{ background: 'purple', }}>
            <div className="container bg-warning " style={{ boxShadow: '1px 1px 2px 2px rgba(0,0,0,0.4)', borderRadius: '10px' }}>
                <div className="row ">
                    <div className="col-md-6 img-col" ></div>
                    <div className="col-md-6 m-auto ">
                        <div className="container p-5">
                            <div className="form-data d-flex flex-column gap-3">
                                <h1 className="primary-heading m-auto">REGISTER HERE</h1>
                                <InputField
                                    type='text'
                                    value={formData.fname}
                                    placeholder='Full Name'
                                    onChange={(e) => setFormData((prev) => ({ ...prev, fname: e.target.value }))} />
                                <InputField
                                    type='email'
                                    value={formData.email}
                                    placeholder='Enter Email...'
                                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
                                <InputField
                                    type='password'
                                    value={formData.password}
                                    placeholder='Enter Password'
                                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} />
                                <InputField
                                    type='password'
                                    value={formData.confirmPassword}
                                    placeholder='Confirm Password'
                                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))} />
                                <h6 style={{ color: 'red' }}>{errMessage}</h6>
                                <button className="btn btn-warning" onClick={handleSubmission}>Login</button>
                                <button><i class="fa-brands fa-google"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
