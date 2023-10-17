import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: '/api/register/',
      data: {
        name,
        email,
        password
      }
    }).then((res)=>{
      setEmail('')
      setName('')
      setPassword('')

      navigate('/login')
      
    }).catch((error)=>{
      console.log(error)
      // alert(error.response.data.detail)

      setEmail('')
      setName('')
      setPassword('')
    })
  }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow">
        <br />
        <h1 className="text-center">Sign up</h1>
        <div className="card-body py-5 px-md-5">
          <form onSubmit={handleSubmit}>
            {/* Full Name input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example1">
                Full Name:
              </label>
              <input type="text" id="form3Example1" className="form-control" 
              value={name} onChange={(e)=>{setName(e.target.value)}}
              autoFocus required/>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input type="email" id="form3Example3" className="form-control" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
              required />
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input type="password" id="form3Example4" className="form-control"
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
              required />
            </div>
            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
              </button>
            </div>
          </form>
          <p>Do you have already an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
