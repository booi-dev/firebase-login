import React from 'react'

function Dashboard(props) {
    const { user, handleLogout } = props
    return (
        <div className='flex justify-center'>
            <h1 className='relative text-3xl text-acc'>Hello World</h1>
            <div className='absolute bottom-2'>
                <div>{user?.email}</div>
                <button type='button'
                    onClick={handleLogout}
                    className=' bg-main-2 text-main-1 bottom-2 py px-2 rounded-sm text-sm'> logout
                </button>
            </div>
        </div>
    )
}

export default Dashboard