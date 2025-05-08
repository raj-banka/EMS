import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import AuthProvider from './context/AuthProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { createBrowserRouter, RouterProvider  } from 'react-router' 
// import AllTask from './components/Tasks/AllTask.tsx'
// import CreateTask from './components/others/CreateTask.tsx'
import EmployeeDashboard from './components/dashboards/EmployeeDashboard.tsx'
import AdminDashboard from './components/dashboards/AdminDashboard.tsx'
// import EmployeeDashboard from './components/dashboards/EmployeeDashboard.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>
},
{
  path : "user/emp",
  element : <EmployeeDashboard/>
},
{
  path : "user/admin",
  element : <AdminDashboard/>
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </Provider>
  </StrictMode>,
)
