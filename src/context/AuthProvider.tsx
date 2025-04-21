import { useEffect, useState , ReactNode  } from 'react'
import { AuthContext } from './Context';
import { getLocalStorage } from '../utils/LocalStorage';
import { UserType } from '../Interfaces/UserType';

type AuthContextPropsType = {
  children : ReactNode;
};

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
