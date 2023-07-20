import React, { useState } from 'react'

function Login() {
    const [login, setLogin] = useState({
        email: "",
        pass: ""
    })
    return (
        <div className='container'>
            <input type="text" value={login.email} placeholder='Email here' onChange={(e) => setLogin((prev) => ({ ...prev, email: e.target.value }))} />
            <input type="text" value={login.pass} placeholder='Password here' onChange={(e) => setLogin((prev) => ({ ...prev, pass: e.target.value }))} />
            <button className="btn btn-warning" onClick={() => console.log(login)}>Login</button>
        </div>
    )
}

export default Login
