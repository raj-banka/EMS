
const Header = () => {
  return (
    <div className='flex justify-between items-end p-10'>
      <h1 className='text-xl font-medium'>Hello <br /><span className='ml-1 text-3xl font-semibold'>Raj</span></h1>
      <button className='bg-red-600 text-white px-5 py-2 rounded-xl font-bold cursor-pointer'>LogOut</button>
    </div>
  );
}

export default Header
