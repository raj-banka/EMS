import { useContext, useEffect, useState } from 'react';
import './App.css';
import AdminDashboard from './components/dashboards/AdminDashboard';
import { setLocalStorage ,getLocalStorage } from './utils/LocalStorage';

import EmployeeDashboard from './components/dashboards/EmployeeDashboard';
import Login from "./components/auth/Login"
import AuthProvider, { AuthContext } from './context/AuthProvider';

function App() {
const[user , setUser] = useState(null);

const handleLogin = (email , password)=>{
  if(email == "admin@a.com" && password == 123){
    setUser('admin');
  }
  else if(email == "user@a.com" && password == 123){
    setUser('user');
  }
  else{
    console.log("invalid");
  }
}
const data = useContext(AuthContext);
console.log(data);

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : ""}
    {user == 'admin' ? <AdminDashboard /> : user == 'user' ? <EmployeeDashboard /> : ""}
    </>
  )
}

export default App
