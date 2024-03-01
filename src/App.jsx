import React from 'react';
import { logout } from './Utils/Authservice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function App() {

const nav = useNavigate()
const email = Cookies.get("current_user")
const [username] = email.split("@")

  const handleLogout = async () => {
    try {
      const response = await logout();
      nav('/signin');
      console.log("Is logout:", response); // Log the value
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=' display flex-col gap-28'>
      <h1 className='capitalize text-8xl font-bold'>Hello, {username}</h1>
          <button onClick={handleLogout} className='btnstyle w-[10vw] h-[5vh] font-semibold'>logout</button>
          <button onClick={ ()=> nav("todolist")} className='btnstyle w-[15vw] h-[5vh] font-semibold'>Dashboard</button>
    </div>
  );
}

export default App;