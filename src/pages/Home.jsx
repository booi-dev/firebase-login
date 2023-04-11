import React, { useState } from 'react'
import Singup from '../components/Singup'

function Home() {

    const [isAuthenticate, setIsAuthenticate] = useState(false)

    return (
        <div>
            <h1>THIS IS HOME</h1>
            {
                !isAuthenticate && <Singup />
            }
        </div>
    )
}

export default Home