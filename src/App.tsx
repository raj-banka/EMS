import { useEffect, useState } from 'react';
import './App.css';
import AdminDashboard from './components/dashboards/AdminDashboard';
import EmployeeDashboard from './components/dashboards/EmployeeDashboard';
import Login from "./components/auth/Login"
// import { Store } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// import  { AuthContext }from './context/Context'
import { UserType } from "./Interfaces/UserType"
import { RootState } from './Redux/store';
// import { setLocalStorage } from './utils/LocalStorage';





interface loggedInData{
  role : 'admin' | 'user' | null;
  data : UserType | null
}

function App() {
  const[userInfo ,setUserInfo ] = useState<UserType | null>(null);
//  const [userData ] = useContext(AuthContext)as [ContextType | null, React.Dispatch<React.SetStateAction<ContextType> | null>];
const userData = useSelector((state:RootState) => state. authInfo);
  const[user , setUser] = useState< 'user' | 'admin' | null >(null);
// console.log(userData,"store");

// useEffect(()=>{
//   localStorage.clear();
//   setLocalStorage();

// },[])

useEffect(() => {
  if (userData) {
    const logged = localStorage.getItem("loggedIn");

    if (logged) {
      try {
        const loggedIn: loggedInData = JSON.parse(logged);

        if (loggedIn && loggedIn.role && loggedIn.data) {
          setUser(loggedIn.role);
          setUserInfo(loggedIn.data);
        } else {
          localStorage.removeItem("loggedIn");
        }
      } catch (error) {
        console.error("Error parsing loggedIn data from localStorage:", error);
        localStorage.removeItem("loggedIn"); // Remove corrupted data
      }
    }
  }
}, [userData]);


 const handleLogin = (email:string , password:string)=>{
  console.log(userData)
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
