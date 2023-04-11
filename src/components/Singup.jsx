import React, { useState } from "react";
import { createPortal } from "react-dom";

import useAuth from "../auth/useAuth";

function Singup(props) {

    const { authenticate, closeHandler } = props;

    const { googleLogin, emailSignup } = useAuth()

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

    const handleGoogleSignupBtn = async () => {
        const authUser = await googleLogin();
        if (authUser) authenticate(authUser)
    };

    const handleEmailSignup = async () => {
        const authUser = await emailSignup(inputVal, password);
        if (authUser) authenticate(authUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEmailSignup()
    };

    let SignupPortal;

    const portal = document.getElementById("portal");

    if (portal) {
        SignupPortal = createPortal(
            <div className="absolute inset-0 flex items-center rounded-md border bg-main-1 p-8 sm:left-1/2 sm:top-1/2 sm:min-w-[400px] sm:max-w-[400px] sm:-translate-x-1/2 sm:-translate-y-1/2">
                <div className="grow">
                    <h1 className="mb-2 text-center text-xl"> Sign up </h1>
                    <button
                        type="button"
                        onClick={handleGoogleSignupBtn}
                        className="w-full rounded-md bg-main-2 py-1 text-main-1"
                    >
                        Singup with google
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
                            <input type="email" value={inputVal}
                                autoComplete="username"
                                required
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
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>,
            portal
        );
    }

    return SignupPortal;
}

export default Singup;
