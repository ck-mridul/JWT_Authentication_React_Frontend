import React from 'react'
import { useState } from 'react'
import axios from '../axios';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const hanleLogin = (e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: '/api/login/',
      withCredentials:true,
      data: {
        email,
        password
      },
    }).then(()=>{
      setEmail('')
      setPassword('')

      navigate('/')
    }).catch((error)=>{
      console.log(error)
      alert(error.response.data.detail)

      setEmail('')
      setPassword('')
    })
  }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100  ">
    <div className="card shadow"><br/>
        <h1 className="text-center ">Login</h1>
      <div className="card-body py-5 px-md-5">
      <form onSubmit={hanleLogin}>
            
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">Email address:</label>
            <input type="email"
            id="form3Example3" 
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoFocus required/>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>

            {/* <!-- Submit button --> */}
            <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block mb-4 ml-5" padding-left="200px" >
            Login
            </button>
            </div>

           
        </form>
      <p>Don't you have an account? <Link to='/signup'>Signup</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Login;