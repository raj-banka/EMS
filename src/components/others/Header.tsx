import { useNavigate } from "react-router";
import { UserType } from "../../Interfaces/UserType";
// Import logo from assets folder
import logo from "../../assets/logo1.png";

interface HeaderProps {
  data?: UserType | null; 
  changeUser?: React.Dispatch<React.SetStateAction<'user' | 'admin' | null>>;
}
const Header: React.FC<HeaderProps> = ({data, changeUser}) => {
  const navigate = useNavigate();
  
  const logOutUser = () => {
    localStorage.setItem("loggedIn", JSON.stringify(null));
    if (changeUser) {
      changeUser(null);
    }
  }

  const backToAdmin = () => {
    navigate('/');
  }
  
  return (
    <div className='flex justify-between items-center p-5 bg-[#252424] w-full'>
      <div className='flex items-center'>
        <div className='mr-10'>
          <img src={logo} alt="logo" className='w-45 h-25' />
        </div>
        
        <div>
          <h1 className='text-xl font-medium'>Hello <br />
            <span className='text-3xl font-semibold'>{data?.name}</span>
          </h1>
        </div>
      </div>
      
      <div>
        {changeUser ? (
          <button 
            onClick={logOutUser}
            className='bg-red-600 text-white px-5 py-2 rounded-xl font-bold cursor-pointer hover:bg-red-400'>
            LogOut
          </button>
        ) : (
          <button 
            onClick={backToAdmin}
            className='bg-red-600 text-white px-5 py-2 rounded-xl font-bold cursor-pointer  hover:bg-red-400'>
            Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Header
