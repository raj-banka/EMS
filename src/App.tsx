import './App.css';
import AdminDashboard from './components/dashboards/AdminDashboard';

import EmployeeDashboard from './components/dashboards/EmployeeDashboard';
import Login from "./components/auth/Login"

function App() {

  return (
    <>
    <Login />
    < EmployeeDashboard />
    < AdminDashboard />
    </>
  )
}

export default App
