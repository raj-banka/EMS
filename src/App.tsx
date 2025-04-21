import { useContext, useEffect, useState } from 'react';
import './App.css';
import AdminDashboard from './components/dashboards/AdminDashboard';
import EmployeeDashboard from './components/dashboards/EmployeeDashboard';
import Login from "./components/auth/Login"
import  { AuthContext }from './context/AuthProvider'
// import { setLocalStorage } from './utils/LocalStorage';

// setLocalStorage();
// localStorage.clear();

interface UserType{
  name : string;
  email : string;
  password : string;
  id : number;
  taskCount : {
   active : number,
   newTask : number,
   completed : number,
   failed : number
  },
  tasks : {
    title : string,
    date : string,
    description : string,
    categories : string,
    active : boolean,
    newTask : boolean,
    completed : boolean,
    failed : boolean
  }[]
}

interface loggedInData{
  role : 'admin' | 'user' | null;
  data : UserType | null
}
interface ContextType {
  employees : UserType[],
  admin : UserType[]
}

function App() {
  const[userInfo ,setUserInfo ] = useState<UserType | null>(null);
 const [userData ] = useContext(AuthContext)as [ContextType | null, React.Dispatch<React.SetStateAction<ContextType> | null>];
  const[user , setUser] = useState< 'user' | 'admin' | null >(null);
// console.log(userData);

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
