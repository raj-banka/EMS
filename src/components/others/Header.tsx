
const Header = ({data , changeUser}) => {
  const logOutUser = () => {
    const user = changeUser();
    console.log(user)
    if(!user){
      localStorage.setItem("loggedIn",JSON.stringify(null));
      changeUser(null);}
  }
  return (
    <div className='flex justify-between items-end p-5 bg-[#252424] w-full'>
      <h1 className='text-xl font-medium'>Hello <br /><span className='ml-1 text-3xl font-semibold'>{data.name}</span></h1>
      <button 
      onClick={logOutUser}
     className='bg-red-600 text-white px-5 py-2 rounded-xl font-bold cursor-pointer'>LogOut</button>
    </div>
  );
}

export default Header
