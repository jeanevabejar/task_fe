import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function App() {

const nav = useNavigate()
const email = Cookies.get("current_user")
const [username] = email.split("@")

  

  return (
    <div className=' display flex-col gap-28 '>
     <h1 className='capitalize text-8xl  font-amatic-sc'>Hello, {username}</h1>
          <button onClick={ ()=> nav("dashboard")} className='btnstyle w-[15vw] h-[5vh] font-semibold'>Dashboard</button>
    </div>
  );
}

export default App;