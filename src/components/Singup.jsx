import React, { useState } from 'react'

function Singup() {

    const [inputVale, setInputVale] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="border p-8 rounded-md">
            <button type='button' className='bg-main-2 text-main-1 w-full rounded-md py-1'>
                Singup with google
            </button>
            <div
                className="flex w-full items-center py-3 text-center
           before:mr-1 before:h-2 before:w-full before:border-b before:border-1 before:content-[''] after:ml-1 after:h-2 after:w-full after:border-b  after:border-1 after:content-[''] "
            >
                or
            </div>
            <div className='[&>label]:block [&>*>input]:block  [&>*>input]:w-[300px]  [&>*>input]:bg-transparent [&>*>input]:border [&>*>input]:p-1 [&>*>input]:rounded-md'>
                <label> email
                    <input type='email' />
                </label>
                <lable> password
                    <input type='password' />
                </lable>
            </div>
        </div>
    )
}

export default Singup