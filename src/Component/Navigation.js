import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Reducer';


function Navigation() {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = ()=>{
    axios({
      method: 'post',
      url: '/api/logout/',
      withCredentials:true,
      headers: {
        'Content-type': 'application/json'
      },
    }).then(()=>{
      dispatch(setUser(null));
    })}

  const leftAlignedStyle = {
    marginLeft: 'auto',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={leftAlignedStyle}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/login">
                  Admin
                </Link>
              </li>
              <>
              { !user ? <><li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Sign up
                </Link>
              </li></>:
              <li className="nav-item">
                <Link className="nav-link active" onClick={logout} aria-current="page" to="/login">
                  Logout
                </Link>
              </li>}
              </>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;
