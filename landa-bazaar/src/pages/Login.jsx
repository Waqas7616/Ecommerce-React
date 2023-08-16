import React, { useState } from 'react'
import InputField from '../components/input/InputField'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        pass: ""
    })
    const [errMessage, setErrMessage] = useState('')
    const handleSubmission = () => {
        if (!login.email || !login.pass) {
            setErrMessage('Both Fields are required')
        } else {
            signInWithEmailAndPassword(auth, login.email, login.pass).then(async (res) => {
                console.log(res)
                await navigate('/homepage')
            }).catch((error) => {
                setErrMessage(error.message)
            })
        }
    }
    return (
        <div className='container-fluid vh-100  d-flex justify-content-center align-items-center' style={{ background: 'purple', }}>
            <div className="container bg-light " style={{ boxShadow: '1px 1px 2px 2px rgba(0,0,0,0.4)', borderRadius: '10px' }}>
                <div className="row ">
                    <div className="col-md-6 img-col" ></div>
                    <div className="col-md-6 m-auto ">
                        <div className="container p-5">
                            <div className="form-data d-flex flex-column gap-3">
                                <h1 className="primary-heading m-auto">LOGIN</h1>

                                <InputField
                                    type='email'
                                    value={login.email}
                                    placeholder='Enter Email...'
                                    onChange={(e) => setLogin((prev) => ({ ...prev, email: e.target.value }))} />
                                <InputField
                                    type='password'
                                    value={login.password}
                                    placeholder='Enter Password'
                                    onChange={(e) => setLogin((prev) => ({ ...prev, pass: e.target.value }))} />

                                <h6 style={{ color: 'red' }}>{errMessage}</h6>
                                <button onClick={handleSubmission}>Login</button>
                                <button><i className="fa-brands fa-google"></i></button>
                                <p className="link-text text-center">Don't have an Account? <Link to='/signup'>Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
