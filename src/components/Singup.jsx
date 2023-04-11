import React, { useState } from 'react'

function Singup() {

    const [inputVale, setInputVale] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = (e) => {
        const val = e.target.value
        setInputVale(val)
    }

    const handlePassword = (e) => {
        const val = e.target.value
        setPassword(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputVale, password)
    }

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
            <form onSubmit={handleSubmit}
                className='[&>label]:block [&>*>input]:block  [&>*>input]:w-[300px]  [&>*>input]:bg-transparent [&>*>input]:border [&>*>input]:p-1 [&>*>input]:rounded-md'>
                <label> email
                    <input type='email' value={inputVale}
                        onChange={handleInput}
                    />
                </label>
                <lable> password
                    <input type='password' value={password}
                        onChange={handlePassword}
                    />
                </lable>
                <button type='submit'
                    className='bg-acc font-bold text-main-1 w-full mt-4 py-1 rounded-md'
                > submit </button>
            </form>
        </div>
    )
}

export default Singup