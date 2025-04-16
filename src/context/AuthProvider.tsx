import {ReactNode} from 'react'
import { createContext } from 'react';
type AuthContextType = {
    children : ReactNode;
};
export const AuthContext = createContext();
const AuthProvider = ({children} :AuthContextType) => {
  return (
    <div>
      <AuthContext.Provider value={"raj"}>
         {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
