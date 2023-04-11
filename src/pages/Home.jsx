import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Singup from "../components/Singup";
import Login from "../components/Login";

function Home() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState('')

  const handleChoice = (type) => {
    setLoginOrSignUp(type)
  }

  const authenticate = () => {
    setIsAuthenticate(true)
  }

  const deAuthenticate = () => {
    setIsAuthenticate(false)
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      {
        !isAuthenticate && <h1 className="mb-8">THIS IS HOME</h1>}
      {
        !isAuthenticate &&
        <div className="[&>button]:bg-main-2 [&>button]:text-main-1 flex gap-2 [&>button]:py-1 [&>button]:px-3 [&>button]:rounded-md">
          <button type="button"
            onClick={() => handleChoice('login')}
          > login </button>
          <button type="button"
            onClick={() => handleChoice('signup')}
          > sign up </button>
        </div>
      }
      {
        loginOrSignUp === 'login' && !isAuthenticate &&
        <Login
          authenticate={authenticate}
          closeHandler={() => handleChoice('')} />
      }
      {loginOrSignUp === 'signup' && !isAuthenticate &&
        <Singup
          authenticate={authenticate}
          closeHandler={() => handleChoice('')} />
      }
      {
        isAuthenticate && <Dashboard handleLogout={deAuthenticate} />
      }
    </div >
  );
}

export default Home;
