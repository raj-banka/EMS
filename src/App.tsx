import { useContext, useEffect, useState } from 'react';
import './App.css';
import AdminDashboard from './components/dashboards/AdminDashboard';
import EmployeeDashboard from './components/dashboards/EmployeeDashboard';
import Login from "./components/auth/Login"
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/LocalStorage';

// setLocalStorage();
// localStorage.clear();
function App() {
  const[userInfo ,setUserInfo ] = useState(null);
  const [userData , setUserData] = useContext(AuthContext);
  const[user , setUser] = useState(null);
// console.log(userData);

useEffect(()=>{
if(userData){
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  if(loggedIn){
  setUser(loggedIn.role);
  setUserInfo(loggedIn.data);
  }
}
},[userData]);

const handleLogin = (email , password)=>{
  if(userData){
  const admins = userData.admin.find((e)=>e.email == email && e.password == password);
  const users = userData.employees.find((e)=>e.email == email && e.password == password);
  if(admins){
    setUser('admin');
    localStorage.setItem("loggedIn" , JSON.stringify({role:'admin',data:admins}));
    setUserInfo(admins);
  }
  else if(users){
      setUser('user');
      localStorage.setItem("loggedIn" ,JSON.stringify({role:'user',data:users}));
      setUserInfo(users);
    }
  
  else{
    alert("Invalid Credentials");
  }
}
}
// console.log(userData);

  return (
    <>

    {!user ? <Login handleLogin = {handleLogin} /> : ""}
    {user == 'admin' && <AdminDashboard changeUser = {setUser} data = {userInfo}/>}
    {user == 'user' && userInfo && <EmployeeDashboard changeUser = {setUser} data = {userInfo} />}
    </>
  )
}

export default App
