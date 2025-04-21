interface UserType{
  name : string;
  email : string;
  password : string;
  id : number;
  // [key : string] : number | string | boolean,
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
interface HeaderProps {
  data: UserType | null; 
  changeUser: React.Dispatch<React.SetStateAction<'user' | 'admin' | null>>;
}
const Header: React.FC<HeaderProps>= ({data , changeUser}) => {
  const logOutUser = () => {
      localStorage.setItem("loggedIn",JSON.stringify(null));
      changeUser(null);
    }
  return (
    <div className='flex justify-between items-end p-5 bg-[#252424] w-full'>
      <h1 className='text-xl font-medium'>Hello <br /><span className='ml-1 text-3xl font-semibold'>{data?.name}</span></h1>
      <button 
      onClick={logOutUser}
     className='bg-red-600 text-white px-5 py-2 rounded-xl font-bold cursor-pointer'>LogOut</button>
    </div>
  );
}

export default Header
