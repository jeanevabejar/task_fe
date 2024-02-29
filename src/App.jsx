import React from 'react';
import { logout } from './Utils/Authservice';
import { useNavigate } from 'react-router-dom';

function App() {

  const nav = useNavigate()


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
    <div>
          <button onClick={handleLogout}>Log Out</button>

          
      
    </div>
  );
}

export default App;