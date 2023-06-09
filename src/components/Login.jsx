import React, { useState } from "react";
import { createPortal } from "react-dom";

import useAuth from "../auth/useAuth";

import Alert from "./Alert";

function Login(props) {

  const { authenticate, handleChoice, closeHandler } = props;

  const { googleLogin, emailLogin } = useAuth()

  const [inputVal, setInputVal] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState('')

  const handleEmailField = (e) => {
    const val = e.target.value;
    setInputVal(val);
  };

  const handlePasswordField = (e) => {
    const val = e.target.value;
    setPassword(val);
  };

  const handleGoogleLoginBtn = async () => {
    const { authUser, error } = await googleLogin();
    if (authUser) authenticate(authUser)
    if ((error)) console.log(error)
  };

  const handleEmailLogin = async () => {
    const { authUser, error } = await emailLogin(inputVal, password);
    if (authUser) authenticate(authUser)
    if (error) {
      setAlert(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert('')
    handleEmailLogin()
  };

  let LoginPortal;

  const portal = document.getElementById("portal");

  if (portal) {
    LoginPortal = createPortal(
      <div className="absolute inset-0 flex items-center rounded-md border bg-main-1 p-8 sm:left-1/2 sm:top-1/2 sm:min-w-[400px] sm:max-w-[400px] sm:-translate-x-1/2 sm:-translate-y-1/2">
        <div className="grow">
          <h1 className="mb-2 text-center text-xl"> Login </h1>
          {
            alert && <Alert text={alert} />
          }
          <button
            type="button"
            onClick={handleGoogleLoginBtn}
            className="w-full rounded-md bg-main-2 py-1 text-main-1"
          >
            Login with google
          </button>
          <div
            className="before:border-1 after:border-1 flex w-full items-center
           py-3 text-center before:mr-1 before:h-2 before:w-full before:border-b before:content-[''] after:ml-1 after:h-2 after:w-full  after:border-b after:content-[''] "
          >
            or
          </div>
          <form
            onSubmit={handleSubmit}
            className="[&>*>input]:block [&>*>input]:w-full [&>*>input]:rounded-md [&>*>input]:border [&>*>input]:bg-transparent [&>*>input]:p-1 [&>label]:block"
          >
            <label>
              email
              <input type="email"
                value={inputVal}
                required
                autoComplete="username"
                onChange={handleEmailField} />
            </label>
            <label>
              password
              <input
                type="password"
                value={password}
                required
                autoComplete="current-password"
                onChange={handlePasswordField}
              />
            </label>
            <div className="flex gap-1">
              <button
                type="submit"
                onClick={closeHandler}
                className="mt-4 w-full rounded-md border bg-inherit py-1 font-bold text-main-2"
              >
                cancel
              </button>
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-acc py-1 font-bold text-main-1"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4">
            <p> Don't have account? <button type="button" onClick={() => handleChoice('signup')} className="text-acc">signup</button> instead. </p>
          </div>
        </div>
      </div>,
      portal
    );
  }

  return LoginPortal;
}

export default Login;
