import React from 'react'

function Dashboard({ handleLogout }) {
    return (
        <div className='flex justify-center'>
            <h1 className='relative text-3xl text-acc'>Hello World</h1>
            <button type='button'
                onClick={handleLogout}
                className='absolute bg-main-2 text-main-1 bottom-2 py px-2 rounded-sm text-sm'> logout </button>
        </div>
    )
}

export default Dashboard