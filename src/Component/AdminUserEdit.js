import React,{ useState } from 'react'
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

function AdminUserEdit(props) {
    const user = props.user
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);
    const [image, setImage] = useState('');
    const navigate = useNavigate()
    const setUsers = props.users

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('bio',bio)
        formData.append('image',image)
        formData.append('id',props.id)
    axios.post('/adminpanel/userupdate/', formData,{
      withCredentials:true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
  }).then((res)=>{
    console.log(res)
    setUsers(res.data)
    navigate('/adminpanel')
  })

    }

  return (
  
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow">
        <br />
        <h1 className="text-center">Edit Profile</h1>
        <div className="card-body py-5 px-md-5">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Full Name input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example1">
                Full Name:
              </label>
              <input type="text" id="form3Example1" className="form-control" 
              value={name} onChange={(e)=>{setName(e.target.value)}}
              autoFocus />
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input type="email" id="form3Example3" className="form-control" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
               />
            </div>
            {/* Bio input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Bio:
              </label>
              <input type="text" id="form3Example3" className="form-control" 
              value={bio} onChange={(e)=>{setBio(e.target.value)}}
               />
            </div>
            {/* image input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                image:
              </label>
              <input type="file" id="form3Example3" className="form-control" 
               onChange={(e)=>{setImage(e.target.files[0])}}
               />
            </div>
            
            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block mb-4">
              Update
              </button>
            </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default AdminUserEdit