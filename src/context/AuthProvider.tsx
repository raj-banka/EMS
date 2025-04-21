import {ReactNode, useEffect, useState  } from 'react'
import React from 'react';
import { createContext } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';
type AuthContextPropsType = {
    children : ReactNode;
};

interface UserType{
  name : string ;
  email : string;
  password : string;
  id : number;
  [key : string] : number | string | boolean;
}

type AuthValue = [userData: { admin: UserType[]; employees: UserType[] } | null,
                   setUserData: React.Dispatch<React.SetStateAction<{ admin: UserType[]; employees: UserType[] } | null>>];

export const AuthContext = createContext<AuthValue>([null , ()=>{}]);
const AuthProvider = ({children} :AuthContextPropsType) => {
  const [ userData , setUserData ] = useState<{
    admin : UserType[];
    employees : UserType[];
  } | null>(null);
  
  useEffect(() => {
    const {admin , employees} = getLocalStorage();
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

export default AuthProvider;
