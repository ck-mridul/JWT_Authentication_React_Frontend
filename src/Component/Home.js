import { useNavigate } from 'react-router-dom'
import axios from '../axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { baseURL } from '../axios'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Reducer';

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const [user, setUser] = useState();
  
  console.log('first')
  
  
  useEffect(()=>{
    console.log('home')
    axios({
      method: 'get',
      url: '/api/user',
      withCredentials:true,
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then((res)=>{
      dispatch(setUser(res.data));
        // console.log(res)
        // setUser(res.data)
        // console.log(user)
      })
      .catch((err)=>{
        navigate('/login')
        alert(err)
        console.log(err)
      })
  },[])
  
  
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow">
        <br />
        <div className="card-body py-5 px-md-5">
        <h2 className="text-center">My Profile</h2>

        {user && <div className="profile-container">
      <img src={baseURL + user.image} alt= 'profileimage' className="profile-image" />
       <div><h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p></div>
      <p className="profile-bio">
        {user.bio}
      </p>
    </div>}
        <button onClick={()=>{navigate('/edituser')}} className='btn btn-primary' type='button'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Home


