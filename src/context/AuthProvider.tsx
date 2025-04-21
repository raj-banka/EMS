import {ReactNode, useEffect, useState} from 'react'
import { createContext } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';
type AuthContextType = {
    children : ReactNode;
};

export const AuthContext = createContext('');
const AuthProvider = ({children} :AuthContextType) => {
  const [ userData , setUserData ] = useState(null);
  
  useEffect(() => {
    const {admin , employees } = getLocalStorage();
    setUserData({admin,employees});
  },[]);
  
  return (
    <div>
      <AuthContext.Provider value={[userData , setUserData]}>
         {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
