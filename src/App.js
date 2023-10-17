import Signup from './Component/Signup';
import Login from './Component/Login';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import EditUser from './Component/EditUser';
import AdminLogin from './Component/AdminLogin';
import Adminpanel from './Component/Adminpanel';

function App() {
  return (
    <div>
  <Router>
    <Navigation/>
    <Routes>
      <Route element={<AdminLogin/>} path='/admin/login'/>
      <Route element={<Adminpanel/>} path='/adminpanel'/>
      <Route element={<EditUser/>} path='/edituser' />
      <Route element={<Home/>} path='/' />
      <Route element={<Login/>} path='/login'/>
      <Route element={<Signup/>} path='/signup'/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
