import React, { useState } from "react";
import { createPortal } from "react-dom";

function Singup(props) {

    const { closeHandler } = props;

    const [inputVale, setInputVale] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e) => {
        const val = e.target.value;
        setInputVale(val);
    };

    const handlePassword = (e) => {
        const val = e.target.value;
        setPassword(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputVale, password);
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
                            <input type="email" value={inputVale} onChange={handleInput} />
                        </label>
                        <lable>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </lable>
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
                                submit
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
