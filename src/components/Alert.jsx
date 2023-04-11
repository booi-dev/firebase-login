import React from 'react'


function Alert({ text }) {
    return (
        <div className='py-2 px-2 my-2 border border-dashed border-red-300 text-red-300'>{text}</div>
    )
}

export default Alert