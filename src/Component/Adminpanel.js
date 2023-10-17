import axios from '../axios'
import React, { useEffect, useState } from 'react'
import 'react-modal/';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AdminUserEdit from './AdminUserEdit';



function Adminpanel() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(Array(13).fill(false));
    
    const handleShow = (index) =>{
        const updatedModals = [...show];
        updatedModals[index] = true;
        console.log(index,updatedModals)

        setShow(updatedModals);
    }
    
    const handleClose = (index) =>{
        const updatedModals = [...show];
        updatedModals[index] = false;
        setShow(updatedModals);
    }

    const handleDelete = (id)=>{
        const userConfirmed = window.confirm('Are you sure you want to continue?');
        if (userConfirmed) {
            axios({
                method: 'post',
                url: '/adminpanel/userdelete/',
                withCredentials:true,
                data: {
                  id
                },
              }).then((res)=>{
                setUsers(res.data)
              })
        }
    }
        
    useEffect(()=>{
        console.log(users)
        axios.get('/adminpanel',
        {
            withCredentials : true
        })
        .then((res)=>{
            console.log(res)
            setUsers(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    },[])
  return (
    <div class="d-flex justify-content-center align-items-center m-5">
    <div class="card-body">
        <div class="table-responsive mx-auto">
            {/* <button className='btn btn-primary'>create</button> */}
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Image</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td> 
                                <td>{index}</td> 
                                <td>{user.name}</td> 
                                <td>{user.email}</td> 
                                <td>
                                    <>
                                    <Button variant="warning" onClick={()=>handleShow(index)}> Edit </Button>
                                    <button type='button' onClick={()=>handleDelete(user.id)} className='btn btn-danger' >Delete</button>
                    
                    {/*========================Edit modal======================= */}
                            
                    <Modal show={show[index]} onHide={()=>handleClose(index)}>
                        <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AdminUserEdit users={setUsers} user={user} id={user.id} />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=>handleClose(index)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>

                    
                                </td> 
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
</div>

  )
}

export default Adminpanel